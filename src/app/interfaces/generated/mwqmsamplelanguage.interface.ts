/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { LanguageEnum } from '../../enums/generated/language.enum';
import { TranslationStatusEnum } from '../../enums/generated/translationstatus.enum';

export interface MWQMSampleLanguage extends LastUpdate {
    Language: LanguageEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    MWQMSampleID: number;
    MWQMSampleLanguageID: number;
    MWQMSampleNote: string;
    TranslationStatus: TranslationStatusEnum;
}
