/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';


export interface SamplingPlanEmail extends LastUpdate {
    Email: string;
    IsContractor: boolean;
    LabSheetAccepted: boolean;
    LabSheetHasValueOver500: boolean;
    LabSheetReceived: boolean;
    LabSheetRejected: boolean;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    SamplingPlanEmailID: number;
    SamplingPlanID: number;
}
