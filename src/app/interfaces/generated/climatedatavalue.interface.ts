/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularEnumsGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from '../../interfaces/generated/lastupdate.interface';

import { StorageDataTypeEnum } from '../../enums/generated/storagedatatype.enum';

export interface ClimateDataValue extends LastUpdate {
    ClimateDataValueID: number;
    ClimateSiteID: number;
    CoolDegDays_C?: number;
    DateTime_Local: Date;
    DirMaxGust_0North?: number;
    HasBeenRead: boolean;
    HeatDegDays_C?: number;
    HourlyValues: string;
    Keep: boolean;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MaxTemp_C?: number;
    MinTemp_C?: number;
    Rainfall_mm?: number;
    RainfallEntered_mm?: number;
    Snow_cm?: number;
    SnowOnGround_cm?: number;
    SpdMaxGust_kmh?: number;
    StorageDataType: StorageDataTypeEnum;
    TotalPrecip_mm_cm?: number;
}
