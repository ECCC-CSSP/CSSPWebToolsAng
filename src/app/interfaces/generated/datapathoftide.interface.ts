/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { CSSPError } from './cssperror.interface';

import { WebTideDataSetEnum } from '../../enums/generated/webtidedataset.enum';

export interface DataPathOfTide extends CSSPError {
    Text: string;
    WebTideDataSet?: WebTideDataSetEnum;
    WebTideDataSetText: string;
}