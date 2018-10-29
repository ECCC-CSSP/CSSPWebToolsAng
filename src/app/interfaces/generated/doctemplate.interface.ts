/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { LanguageEnum } from '../../enums/generated/language.enum';
import { TVTypeEnum } from '../../enums/generated/tvtype.enum';

export interface DocTemplate extends LastUpdate {
    DocTemplateID: number;
    FileName: string;
    Language: LanguageEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    TVFileTVItemID: number;
    TVType: TVTypeEnum;
}