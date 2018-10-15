/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularEnumsGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from '../../interfaces/generated/lastupdate.interface';

import { LanguageEnum } from '../../enums/generated/language.enum';
import { TranslationStatusEnum } from '../../enums/generated/translationstatus.enum';

export interface ReportSectionLanguage extends LastUpdate {
    Language: LanguageEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    ReportSectionID: number;
    ReportSectionLanguageID: number;
    ReportSectionName: string;
    ReportSectionText: string;
    TranslationStatusReportSectionName: TranslationStatusEnum;
    TranslationStatusReportSectionText: TranslationStatusEnum;
}
