/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { CSSPError } from './cssperror.interface';

import { TVItemInfrastructureTypeTVItemLink } from './tviteminfrastructuretypetvitemlink.interface';
import { InfrastructureTypeEnum } from '../../enums/generated/infrastructuretype.enum';
import { TVItem } from './tvitem.interface';
import { TVItemLink } from './tvitemlink.interface';

export interface TVItemInfrastructureTypeTVItemLink extends CSSPError {
    FlowTo: TVItemInfrastructureTypeTVItemLink;
    InfrastructureType: InfrastructureTypeEnum;
    InfrastructureTypeText: string;
    SeeOtherMunicipalityTVItemID?: number;
    TVItem: TVItem;
    TVItemLinkList: TVItemLink[];
}
