/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';
import { EmailTypeEnum } from '../../enums/generated/emailtype.enum';

export interface Email extends LastUpdate {
    EmailAddress: string;
    EmailID: number;
    EmailTVItemID: number;
    EmailType: EmailTypeEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
}
