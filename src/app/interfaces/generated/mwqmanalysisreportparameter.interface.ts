/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { AnalysisCalculationTypeEnum } from '../../enums/generated/analysiscalculationtype.enum';
import { AnalysisReportExportCommandEnum } from '../../enums/generated/analysisreportexportcommand.enum';

export interface MWQMAnalysisReportParameter extends LastUpdate {
    AnalysisCalculationType: AnalysisCalculationTypeEnum;
    AnalysisName: string;
    AnalysisReportYear?: number;
    Command: AnalysisReportExportCommandEnum;
    DryLimit24h: number;
    DryLimit48h: number;
    DryLimit72h: number;
    DryLimit96h: number;
    EndDate: Date;
    ExcelTVFileTVItemID?: number;
    FullYear: boolean;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MidRangeNumberOfDays: number;
    MWQMAnalysisReportParameterID: number;
    NumberOfRuns: number;
    RunsToOmit: string;
    SalinityHighlightDeviationFromAverage: number;
    ShortRangeNumberOfDays: number;
    ShowDataTypes: string;
    StartDate: Date;
    SubsectorTVItemID: number;
    WetLimit24h: number;
    WetLimit48h: number;
    WetLimit72h: number;
    WetLimit96h: number;
}
