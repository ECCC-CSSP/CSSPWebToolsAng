/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';
import { LogCommandEnum } from '../../enums/generated/logcommand.enum';

export interface Log extends LastUpdate {
    ID: number;
    Information: string;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    LogCommand: LogCommandEnum;
    LogID: number;
    TableName: string;
}
