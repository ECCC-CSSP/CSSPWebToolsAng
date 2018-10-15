/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularEnumsGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from '../../interfaces/generated/lastupdate.interface';

import { StorageDataTypeEnum } from '../../enums/generated/storagedatatype.enum';

export interface HydrometricDataValue extends LastUpdate {
    DateTime_Local: Date;
    Discharge_m3_s?: number;
    DischargeEntered_m3_s?: number;
    HasBeenRead: boolean;
    HourlyValues: string;
    HydrometricDataValueID: number;
    HydrometricSiteID: number;
    Keep: boolean;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    Level_m?: number;
    StorageDataType: StorageDataTypeEnum;
}
