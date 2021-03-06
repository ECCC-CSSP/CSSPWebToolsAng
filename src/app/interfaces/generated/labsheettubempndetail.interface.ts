/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { SampleTypeEnum } from '../../enums/generated/sampletype.enum';

export interface LabSheetTubeMPNDetail extends LastUpdate {
    LabSheetDetailID: number;
    LabSheetTubeMPNDetailID: number;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MPN?: number;
    MWQMSiteTVItemID: number;
    Ordinal: number;
    ProcessedBy: string;
    Salinity?: number;
    SampleDateTime?: Date;
    SampleType: SampleTypeEnum;
    SiteComment: string;
    Temperature?: number;
    Tube0_1?: number;
    Tube1_0?: number;
    Tube10?: number;
}
