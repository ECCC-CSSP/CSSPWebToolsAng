/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { AerationTypeEnum } from '../../enums/generated/aerationtype.enum';
import { AlarmSystemTypeEnum } from '../../enums/generated/alarmsystemtype.enum';
import { CollectionSystemTypeEnum } from '../../enums/generated/collectionsystemtype.enum';
import { DisinfectionTypeEnum } from '../../enums/generated/disinfectiontype.enum';
import { FacilityTypeEnum } from '../../enums/generated/facilitytype.enum';
import { InfrastructureTypeEnum } from '../../enums/generated/infrastructuretype.enum';
import { PreliminaryTreatmentTypeEnum } from '../../enums/generated/preliminarytreatmenttype.enum';
import { PrimaryTreatmentTypeEnum } from '../../enums/generated/primarytreatmenttype.enum';
import { SecondaryTreatmentTypeEnum } from '../../enums/generated/secondarytreatmenttype.enum';
import { TertiaryTreatmentTypeEnum } from '../../enums/generated/tertiarytreatmenttype.enum';
import { TreatmentTypeEnum } from '../../enums/generated/treatmenttype.enum';

export interface Infrastructure extends LastUpdate {
    AerationType?: AerationTypeEnum;
    AlarmSystemType?: AlarmSystemTypeEnum;
    AverageDepth_m?: number;
    AverageFlow_m3_day?: number;
    CanOverflow?: boolean;
    CivicAddressTVItemID?: number;
    CollectionSystemType?: CollectionSystemTypeEnum;
    DecayRate_per_day?: number;
    DesignFlow_m3_day?: number;
    DisinfectionType?: DisinfectionTypeEnum;
    DistanceFromShore_m?: number;
    FacilityType?: FacilityTypeEnum;
    FarFieldVelocity_m_s?: number;
    HorizontalAngle_deg?: number;
    InfrastructureCategory: string;
    InfrastructureID: number;
    InfrastructureTVItemID: number;
    InfrastructureType?: InfrastructureTypeEnum;
    IsMechanicallyAerated?: boolean;
    LastUpdateContactTVItemID: number;
    LastUpdateDate_UTC: Date;
    LSID?: number;
    NearFieldVelocity_m_s?: number;
    NumberOfAeratedCells?: number;
    NumberOfCells?: number;
    NumberOfPorts?: number;
    PeakFlow_m3_day?: number;
    PercFlowOfTotal?: number;
    PopServed?: number;
    PortDiameter_m?: number;
    PortElevation_m?: number;
    PortSpacing_m?: number;
    PreliminaryTreatmentType?: PreliminaryTreatmentTypeEnum;
    PrimaryTreatmentType?: PrimaryTreatmentTypeEnum;
    PrismID?: number;
    ReceivingWater_MPN_per_100ml?: number;
    ReceivingWaterSalinity_PSU?: number;
    ReceivingWaterTemperature_C?: number;
    SecondaryTreatmentType?: SecondaryTreatmentTypeEnum;
    SeeOtherMunicipalityTVItemID?: number;
    Site?: number;
    SiteID?: number;
    TempCatchAllRemoveLater: string;
    TertiaryTreatmentType?: TertiaryTreatmentTypeEnum;
    TimeOffset_hour?: number;
    TPID?: number;
    TreatmentType?: TreatmentTypeEnum;
    VerticalAngle_deg?: number;
}
