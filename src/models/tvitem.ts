export interface TVItem {
    TVItemID: number;
    TVLevel: number;
    TVPath: string;
    TVType: number;
    ParentID: number;
    IsActive: boolean;
    LastUpdateDate_UTC: Date;
    LastUpdateContactTVItemID: number;
    HasErrors: boolean;
    ValidationResults: string[];
    TVItemWeb: TVItemWeb;
    TVItemReport: TVItemReport;
  }

  export interface TVItemWeb {
    TVText: string;
    LastUpdateContactTVText: string;
    TVTypeText: string;
  }

  export interface TVItemReport {
    TVItemReportTest: string;
  }
