/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { ContactTitleEnum } from '../../enums/generated/contacttitle.enum';

export interface Contact extends LastUpdate {
    ContactID: number;
    ContactTitle?: ContactTitleEnum;
    ContactTVItemID: number;
    Disabled: boolean;
    EmailValidated: boolean;
    FirstName: string;
    Id: string;
    Initial: string;
    IsAdmin: boolean;
    IsNew: boolean;
    LastName: string;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    LoginEmail: string;
    SamplingPlanner_ProvincesTVItemID: string;
    Token: string;
    WebName: string;
}
