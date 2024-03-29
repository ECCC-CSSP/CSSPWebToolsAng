/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { LastUpdate } from './lastupdate.interface';

import { DbSet`1 } from './dbset`1.interface';
import { ChangeTracker } from './changetracker.interface';
import { IConfigurationRoot } from './iconfigurationroot.interface';
import { DbContextId } from './dbcontextid.interface';
import { DatabaseFacade } from './databasefacade.interface';
import { IModel } from './imodel.interface';

export interface TestDBContext extends LastUpdate {
    Addresses: DbSet`1;
    AppErrLogs: DbSet`1;
    AppTaskLanguages: DbSet`1;
    AppTasks: DbSet`1;
    AspNetUsers: DbSet`1;
    BoxModelLanguages: DbSet`1;
    BoxModelResults: DbSet`1;
    BoxModels: DbSet`1;
    ChangeTracker: ChangeTracker;
    Classifications: DbSet`1;
    ClimateDataValues: DbSet`1;
    ClimateSites: DbSet`1;
    Configuration: IConfigurationRoot;
    ContactPreferences: DbSet`1;
    Contacts: DbSet`1;
    ContactShortcuts: DbSet`1;
    ContextId: DbContextId;
    Database: DatabaseFacade;
    DocTemplates: DbSet`1;
    DrogueRunPositions: DbSet`1;
    DrogueRuns: DbSet`1;
    EmailDistributionListContactLanguages: DbSet`1;
    EmailDistributionListContacts: DbSet`1;
    EmailDistributionListLanguages: DbSet`1;
    EmailDistributionLists: DbSet`1;
    Emails: DbSet`1;
    Error: string;
    HelpDocs: DbSet`1;
    HydrometricDataValues: DbSet`1;
    HydrometricSites: DbSet`1;
    InfrastructureLanguages: DbSet`1;
    Infrastructures: DbSet`1;
    LabSheetDetails: DbSet`1;
    LabSheets: DbSet`1;
    LabSheetTubeMPNDetails: DbSet`1;
    Logs: DbSet`1;
    MapInfoPoints: DbSet`1;
    MapInfos: DbSet`1;
    MikeBoundaryConditions: DbSet`1;
    MikeScenarioResults: DbSet`1;
    MikeScenarios: DbSet`1;
    MikeSources: DbSet`1;
    MikeSourceStartEnds: DbSet`1;
    Model: IModel;
    MWQMAnalysisReportParameters: DbSet`1;
    MWQMLookupMPNs: DbSet`1;
    MWQMRunLanguages: DbSet`1;
    MWQMRuns: DbSet`1;
    MWQMSampleLanguages: DbSet`1;
    MWQMSamples: DbSet`1;
    MWQMSites: DbSet`1;
    MWQMSiteStartEndDates: DbSet`1;
    MWQMSubsectorLanguages: DbSet`1;
    MWQMSubsectors: DbSet`1;
    PolSourceGroupingLanguages: DbSet`1;
    PolSourceGroupings: DbSet`1;
    PolSourceObservationIssues: DbSet`1;
    PolSourceObservations: DbSet`1;
    PolSourceSiteEffects: DbSet`1;
    PolSourceSiteEffectTerms: DbSet`1;
    PolSourceSites: DbSet`1;
    RainExceedanceClimateSites: DbSet`1;
    RainExceedances: DbSet`1;
    RatingCurves: DbSet`1;
    RatingCurveValues: DbSet`1;
    ReportSections: DbSet`1;
    ReportTypes: DbSet`1;
    ResetPasswords: DbSet`1;
    SamplingPlanEmails: DbSet`1;
    SamplingPlans: DbSet`1;
    SamplingPlanSubsectors: DbSet`1;
    SamplingPlanSubsectorSites: DbSet`1;
    SpillLanguages: DbSet`1;
    Spills: DbSet`1;
    Tels: DbSet`1;
    TideDataValues: DbSet`1;
    TideLocations: DbSet`1;
    TideSites: DbSet`1;
    TVFileLanguages: DbSet`1;
    TVFiles: DbSet`1;
    TVItemLanguages: DbSet`1;
    TVItemLinks: DbSet`1;
    TVItems: DbSet`1;
    TVItemStats: DbSet`1;
    TVItemUserAuthorizations: DbSet`1;
    TVTypeUserAuthorizations: DbSet`1;
    UseOfSites: DbSet`1;
    VPAmbients: DbSet`1;
    VPResults: DbSet`1;
    VPScenarioLanguages: DbSet`1;
    VPScenarios: DbSet`1;
}
