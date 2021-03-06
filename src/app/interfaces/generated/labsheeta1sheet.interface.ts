/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { CSSPError } from './cssperror.interface';

import { LabSheetA1Measurement } from './labsheeta1measurement.interface';
import { LabSheetTypeEnum } from '../../enums/generated/labsheettype.enum';
import { SampleTypeEnum } from '../../enums/generated/sampletype.enum';
import { SamplingPlanTypeEnum } from '../../enums/generated/samplingplantype.enum';

export interface LabSheetA1Sheet extends CSSPError {
    ApprovalDay: string;
    ApprovalMonth: string;
    ApprovalYear: string;
    ApprovedBySupervisorInitials: string;
    BackupDirectory: string;
    Bath1Blank44_5: string;
    Bath1Negative44_5: string;
    Bath1NonTarget44_5: string;
    Bath1Positive44_5: string;
    Bath2Blank44_5: string;
    Bath2Negative44_5: string;
    Bath2NonTarget44_5: string;
    Bath2Positive44_5: string;
    Bath3Blank44_5: string;
    Bath3Negative44_5: string;
    Bath3NonTarget44_5: string;
    Bath3Positive44_5: string;
    Blank35: string;
    ControlLot: string;
    DailyDuplicateAcceptableOrUnacceptable: string;
    DailyDuplicatePrecisionCriteria: string;
    DailyDuplicateRLog: string;
    IncludeLaboratoryQAQC: boolean;
    IncubationBath1EndTime: string;
    IncubationBath1StartTime: string;
    IncubationBath1TimeCalculated: string;
    IncubationBath2EndTime: string;
    IncubationBath2StartTime: string;
    IncubationBath2TimeCalculated: string;
    IncubationBath3EndTime: string;
    IncubationBath3StartTime: string;
    IncubationBath3TimeCalculated: string;
    IncubationStartSameDay: string;
    IntertechDuplicateAcceptableOrUnacceptable: string;
    IntertechDuplicatePrecisionCriteria: string;
    IntertechDuplicateRLog: string;
    IntertechReadAcceptableOrUnacceptable: string;
    LabSheetA1MeasurementList: LabSheetA1Measurement[];
    LabSheetType: LabSheetTypeEnum;
    LabSheetTypeText: string;
    Log: string;
    Lot35: string;
    Lot44_5: string;
    Negative35: string;
    NonTarget35: string;
    Positive35: string;
    ResultsReadBy: string;
    ResultsReadDay: string;
    ResultsReadMonth: string;
    ResultsReadYear: string;
    ResultsRecordedBy: string;
    ResultsRecordedDay: string;
    ResultsRecordedMonth: string;
    ResultsRecordedYear: string;
    RunComment: string;
    RunDay: string;
    RunMonth: string;
    RunNumber: number;
    RunWeatherComment: string;
    RunYear: string;
    SalinitiesReadBy: string;
    SalinitiesReadDay: string;
    SalinitiesReadMonth: string;
    SalinitiesReadYear: string;
    SampleBottleLotNumber: string;
    SampleCrewInitials: string;
    SampleType: SampleTypeEnum;
    SampleTypeText: string;
    SamplingPlanType: SamplingPlanTypeEnum;
    SamplingPlanTypeText: string;
    SubsectorLocation: string;
    SubsectorName: string;
    SubsectorTVItemID: number;
    TCAverage: string;
    TCField1: string;
    TCField2: string;
    TCFirst: string;
    TCHas2Coolers: string;
    TCLab1: string;
    TCLab2: string;
    Tides: string;
    Version: number;
    WaterBath1: string;
    WaterBath2: string;
    WaterBath3: string;
    WaterBathCount: number;
}
