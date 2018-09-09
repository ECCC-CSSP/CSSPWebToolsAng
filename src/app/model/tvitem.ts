/**
 * @summary TVItem interface
 */
export interface TVItem {
  /**
   * @property Unique ID
   */
  TVItemID: number;
  /**
   * @field Tree view level
   */
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

export enum bon {
  allo,
  testing,
  bonjour
}
