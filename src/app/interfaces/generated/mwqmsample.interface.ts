/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { SampleTypeEnum } from '../../enums/generated/sampletype.enum';

export interface MWQMSample extends LastUpdate {
    Depth_m?: number;
    FecCol_MPN_100ml: number;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MWQMRunTVItemID: number;
    MWQMSampleID: number;
    MWQMSiteTVItemID: number;
    PH?: number;
    ProcessedBy: string;
    Salinity_PPT?: number;
    SampleDateTime_Local: Date;
    SampleType_old?: SampleTypeEnum;
    SampleTypesText: string;
    Tube_0_1?: number;
    Tube_1_0?: number;
    Tube_10?: number;
    UseForOpenData: boolean;
    WaterTemp_C?: number;
}
