/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import ContentTypeCollectionInterface from "../../content-type-collection.d";
import ColumnGroupPreview from "../column-group/preview";
import ColumnPreview from "./preview";

export interface ColumnInitElementEventParamsInterface {
    column: ContentTypeCollectionInterface<ColumnPreview>;
    element: JQuery;
    parent: ContentTypeCollectionInterface<ColumnGroupPreview>;
}
