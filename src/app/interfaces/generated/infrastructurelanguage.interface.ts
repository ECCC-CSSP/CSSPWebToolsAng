/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { LanguageEnum } from '../../enums/generated/language.enum';
import { TranslationStatusEnum } from '../../enums/generated/translationstatus.enum';

export interface InfrastructureLanguage extends LastUpdate {
    Comment: string;
    InfrastructureID: number;
    InfrastructureLanguageID: number;
    Language: LanguageEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    TranslationStatus: TranslationStatusEnum;
}
