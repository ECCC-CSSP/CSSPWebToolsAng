/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularEnumsGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from '../../interfaces/generated/lastupdate.interface';

import { MikeBoundaryConditionLevelOrVelocityEnum } from '../../enums/generated/mikeboundaryconditionlevelorvelocity.enum';
import { TVTypeEnum } from '../../enums/generated/tvtype.enum';
import { WebTideDataSetEnum } from '../../enums/generated/webtidedataset.enum';

export interface MikeBoundaryCondition extends LastUpdate {
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MikeBoundaryConditionCode: string;
    MikeBoundaryConditionFormat: string;
    MikeBoundaryConditionID: number;
    MikeBoundaryConditionLength_m: number;
    MikeBoundaryConditionLevelOrVelocity: MikeBoundaryConditionLevelOrVelocityEnum;
    MikeBoundaryConditionName: string;
    MikeBoundaryConditionTVItemID: number;
    NumberOfWebTideNodes: number;
    TVType: TVTypeEnum;
    WebTideDataFromStartToEndDate: string;
    WebTideDataSet: WebTideDataSetEnum;
}
