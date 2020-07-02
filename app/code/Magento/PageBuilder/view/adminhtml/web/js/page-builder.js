/*eslint-disable */
/* jscs:disable */
define(["jquery", "knockout", "mage/translate", "Magento_PageBuilder/js/events", "Magento_Ui/js/lib/knockout/template/loader", "Magento_Ui/js/modal/alert", "mageUtils", "underscore", "Magento_PageBuilder/js/acl", "Magento_PageBuilder/js/config", "Magento_PageBuilder/js/content-type-factory", "Magento_PageBuilder/js/panel", "Magento_PageBuilder/js/stage", "Magento_PageBuilder/js/template-manager"], function (_jquery, _knockout, _translate, _events, _loader, _alert, _mageUtils, _underscore, _acl, _config, _contentTypeFactory, _panel, _stage, _templateManager) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  var PageBuilder =
  /*#__PURE__*/
  function () {
    "use strict";

    function PageBuilder(config, initialValue, contentSnapshot) {
      var _this = this;

      this.template = "Magento_PageBuilder/page-builder";
      this.isStageReady = _knockout.observable(false);
      this.id = _mageUtils.uniqueid();
      this.originalScrollTop = 0;
      this.isContentSnapshotMode = false;
      this.isFullScreen = _knockout.observable(false);
      this.loading = _knockout.observable(true);
      this.wrapperStyles = _knockout.observable({});
      this.previousWrapperStyles = {};

      _config.setConfig(config);

      _config.setMode("Preview");

      _config.setContentSnapshot({
        pageBuilderId: this.id,
        contentSnapshotMode: contentSnapshot
      });

      this.preloadTemplates(config);
      this.initialValue = initialValue;
      this.isFullScreen(config.isFullScreen);
      this.config = config;
      this.isAllowedTemplateApply = (0, _acl.isAllowed)(_acl.resources.TEMPLATE_APPLY);
      this.isAllowedTemplateSave = (0, _acl.isAllowed)(_acl.resources.TEMPLATE_SAVE); // Create the required root container for the stage

      (0, _contentTypeFactory)(_config.getContentTypeConfig(_stage.rootContainerName), null, this.id).then(function (rootContainer) {
        _this.stage = new _stage(_this, rootContainer);

        _this.isStageReady(true);
      });
      this.panel = new _panel(this);

      if (_config.getContentSnapshot().contentSnapshotMode) {
        this.panel.isVisible(false);
      }

      this.initListeners();
    }
    /**
     * Destroy rootContainer instance.
     */


    var _proto = PageBuilder.prototype;

    _proto.destroy = function destroy() {
      this.stage.rootContainer.destroy();
    }
    /**
     * Init listeners.
     */
    ;

    _proto.initListeners = function initListeners() {
      var _this2 = this;

      _events.on("stage:" + this.id + ":toggleFullscreen", this.toggleFullScreen.bind(this));

      this.isFullScreen.subscribe(function () {
        return _this2.onFullScreenChange();
      });
    }
    /**
     * Changes tabindex and content editable on stage elements.
     */
    ;

    _proto.toggleFocusableElements = function toggleFocusableElements() {
      var stageWrapper = (0, _jquery)("#" + this.id).parent();
      var focusableElements = ':focusable:not(.pagebuilder-stage-overlay)';
      var editableElements = '[contenteditable]';
      var tabIndexValue = this.isFullScreen() ? '0' : '-1';
      var editableValue = this.isFullScreen() ? 'true' : 'false';
      stageWrapper.find(editableElements).attr('contenteditable', editableValue);
      stageWrapper.find(focusableElements).attr('tabindex', tabIndexValue);
    }
    /**
     * MouseOver event for Stage Overlay
     */
    ;

    _proto.onStageOverlayMouseOver = function onStageOverlayMouseOver() {
      (0, _jquery)('.pagebuilder-stage-overlay').addClass('_hover');
    }
    /**
     * MouseOut event for Stage Overlay
     */
    ;

    _proto.onStageOverlayMouseOut = function onStageOverlayMouseOut() {
      (0, _jquery)('.pagebuilder-stage-overlay').removeClass('_hover');
    }
    /**
     * Tells the stage wrapper to expand to fullScreen
     *
     * @param {StageToggleFullScreenParamsInterface} args
     */
    ;

    _proto.toggleFullScreen = function toggleFullScreen(args) {
      var _this3 = this;

      if (args.animate === false) {
        this.isFullScreen(!this.isFullScreen());
        return;
      }

      var stageWrapper = (0, _jquery)("#" + this.stage.id).parent();
      var pageBuilderWrapper = stageWrapper.parents(".pagebuilder-wysiwyg-wrapper");
      var panel = stageWrapper.find(".pagebuilder-panel");

      if (!this.isFullScreen()) {
        pageBuilderWrapper.css("height", pageBuilderWrapper.outerHeight());
        this.previousPanelHeight = panel.outerHeight();
        panel.css("height", this.previousPanelHeight + "px");
        /**
         * Fix the stage in the exact place it is when it's part of the content and allow it to transition to full
         * screen.
         */

        var xPosition = parseInt(stageWrapper.offset().top.toString(), 10) - parseInt((0, _jquery)(window).scrollTop().toString(), 10);
        var yPosition = stageWrapper.offset().left;
        this.previousWrapperStyles = {
          position: "fixed",
          top: xPosition + "px",
          left: yPosition + "px",
          zIndex: "800",
          width: stageWrapper.outerWidth().toString() + "px"
        };
        this.wrapperStyles(this.previousWrapperStyles);
        this.isFullScreen(true);

        _underscore.defer(function () {
          // Remove all styles we applied to fix the position once we're transitioning
          panel.css("height", "");

          _this3.wrapperStyles(Object.keys(_this3.previousWrapperStyles).reduce(function (object, styleName) {
            var _Object$assign;

            return Object.assign(object, (_Object$assign = {}, _Object$assign[styleName] = "", _Object$assign));
          }, {}));
        });
      } else {
        // When leaving full screen mode just transition back to the original state
        this.wrapperStyles(this.previousWrapperStyles);
        this.isFullScreen(false);

        if (!this.isContentSnapshotMode) {
          panel.css("height", this.previousPanelHeight + "px"); // Wait for the 350ms animation to complete before changing these properties back

          _underscore.delay(function () {
            panel.css("height", "");
            pageBuilderWrapper.css("height", "");

            _this3.wrapperStyles(Object.keys(_this3.previousWrapperStyles).reduce(function (object, styleName) {
              var _Object$assign2;

              return Object.assign(object, (_Object$assign2 = {}, _Object$assign2[styleName] = "", _Object$assign2));
            }, {}));

            _this3.previousWrapperStyles = {};
            _this3.previousPanelHeight = null;
          }, 350);
        }
      }
    }
    /**
     * Change window scroll base on full screen mode.
     */
    ;

    _proto.onFullScreenChange = function onFullScreenChange() {
      if (this.isFullScreen()) {
        (0, _jquery)("body").css("overflow", "hidden");
      } else {
        (0, _jquery)("body").css("overflow", "");
      }

      this.toggleFocusableElements();

      _events.trigger("stage:" + this.id + ":fullScreenModeChangeAfter", {
        fullScreen: this.isFullScreen()
      });
    }
    /**
     * Get template.
     *
     * @returns {string}
     */
    ;

    _proto.getTemplate = function getTemplate() {
      return this.template;
    }
    /**
     * Toggle template manager
     */
    ;

    _proto.toggleTemplateManger = function toggleTemplateManger() {
      if (!(0, _acl.isAllowed)(_acl.resources.TEMPLATE_APPLY)) {
        (0, _alert)({
          content: (0, _translate)("You do not have permission to apply templates."),
          title: (0, _translate)("Permission Error")
        });
        return false;
      }

      _events.trigger("stage:templateManager:open", {
        stage: this.stage
      });
    }
    /**
     * Enable saving the current stage as a template
     */
    ;

    _proto.saveAsTemplate = function saveAsTemplate() {
      return (0, _templateManager.saveAsTemplate)(this.stage);
    }
    /**
     * Preload all templates into the window to reduce calls later in the app
     *
     * @param config
     */
    ;

    _proto.preloadTemplates = function preloadTemplates(config) {
      var previewTemplates = _underscore.values(config.content_types).map(function (contentType) {
        return _underscore.values(contentType.appearances).map(function (appearance) {
          return appearance.preview_template;
        });
      }).reduce(function (array, value) {
        return array.concat(value);
      }, []).map(function (value) {
        return (0, _loader.formatPath)(value);
      });

      _underscore.defer(function () {
        require(previewTemplates);
      });
    };

    return PageBuilder;
  }();

  return PageBuilder;
});
//# sourceMappingURL=page-builder.js.map