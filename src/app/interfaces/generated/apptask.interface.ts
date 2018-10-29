/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { AppTaskCommandEnum } from '../../enums/generated/apptaskcommand.enum';
import { AppTaskStatusEnum } from '../../enums/generated/apptaskstatus.enum';
import { LanguageEnum } from '../../enums/generated/language.enum';

export interface AppTask extends LastUpdate {
    AppTaskCommand: AppTaskCommandEnum;
    AppTaskID: number;
    AppTaskStatus: AppTaskStatusEnum;
    EndDateTime_UTC?: Date;
    EstimatedLength_second?: number;
    Language: LanguageEnum;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    Parameters: string;
    PercentCompleted: number;
    RemainingTime_second?: number;
    StartDateTime_UTC: Date;
    TVItemID: number;
    TVItemID2: number;
}
