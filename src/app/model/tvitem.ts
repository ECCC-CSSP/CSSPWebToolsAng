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
}

export interface TVItemLanguage {
  TVItemLanguageID: number;
  TVText: string;
  Language: number;
  TranslationStatus: number;
}

export interface TVItemA extends TVItem {
  TVItemLanguage: TVItemLanguage;
  LastUpdateContactTVItemLanguage: TVItemLanguage;
  TVTypeText: string;
}
