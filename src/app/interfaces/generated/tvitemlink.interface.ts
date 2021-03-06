/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { TVTypeEnum } from '../../enums/generated/tvtype.enum';

export interface TVItemLink extends LastUpdate {
    EndDateTime_Local?: Date;
    FromTVItemID: number;
    FromTVType: TVTypeEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    Ordinal: number;
    ParentTVItemLinkID?: number;
    StartDateTime_Local?: Date;
    ToTVItemID: number;
    ToTVType: TVTypeEnum;
    TVItemLinkID: number;
    TVLevel: number;
    TVPath: string;
}
