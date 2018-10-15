/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularEnumsGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from '../../interfaces/generated/lastupdate.interface';

import { SiteTypeEnum } from '../../enums/generated/sitetype.enum';

export interface UseOfSite extends LastUpdate {
    EndYear?: number;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    Ordinal: number;
    Param1?: number;
    Param2?: number;
    Param3?: number;
    Param4?: number;
    SiteTVItemID: number;
    SiteType: SiteTypeEnum;
    StartYear: number;
    SubsectorTVItemID: number;
    UseEquation?: boolean;
    UseOfSiteID: number;
    UseWeight?: boolean;
    Weight_perc?: number;
}
