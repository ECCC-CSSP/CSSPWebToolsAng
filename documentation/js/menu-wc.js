'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">csspwebtoolsang documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-ffc14751072d5b7e930b8fc31ec4d2e6"' : 'data-target="#xs-components-links-module-AppModule-ffc14751072d5b7e930b8fc31ec4d2e6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-ffc14751072d5b7e930b8fc31ec4d2e6"' : 'id="xs-components-links-module-AppModule-ffc14751072d5b7e930b8fc31ec4d2e6"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/ApiService.html" data-type="entity-link">ApiService</a>
                    </li>
                    <li class="link">
                        <a href="classes/QueryOptions.html" data-type="entity-link">QueryOptions</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AddressExtraA.html" data-type="entity-link">AddressExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AddressExtraB.html" data-type="entity-link">AddressExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppErrLog.html" data-type="entity-link">AppErrLog</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppErrLogExtraA.html" data-type="entity-link">AppErrLogExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppErrLogExtraB.html" data-type="entity-link">AppErrLogExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppErrLogExtraC.html" data-type="entity-link">AppErrLogExtraC</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppErrLogExtraD.html" data-type="entity-link">AppErrLogExtraD</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTask.html" data-type="entity-link">AppTask</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskExtraA.html" data-type="entity-link">AppTaskExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskExtraB.html" data-type="entity-link">AppTaskExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskLanguage.html" data-type="entity-link">AppTaskLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskLanguageExtraA.html" data-type="entity-link">AppTaskLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskLanguageExtraB.html" data-type="entity-link">AppTaskLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppTaskParameter.html" data-type="entity-link">AppTaskParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AspNetUser.html" data-type="entity-link">AspNetUser</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModel.html" data-type="entity-link">BoxModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelCalNumb.html" data-type="entity-link">BoxModelCalNumb</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelExtraA.html" data-type="entity-link">BoxModelExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelExtraB.html" data-type="entity-link">BoxModelExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelLanguage.html" data-type="entity-link">BoxModelLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelLanguageExtraA.html" data-type="entity-link">BoxModelLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelLanguageExtraB.html" data-type="entity-link">BoxModelLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelResult.html" data-type="entity-link">BoxModelResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelResultExtraA.html" data-type="entity-link">BoxModelResultExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BoxModelResultExtraB.html" data-type="entity-link">BoxModelResultExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CSSPMPNTable.html" data-type="entity-link">CSSPMPNTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CSSPWQInputApp.html" data-type="entity-link">CSSPWQInputApp</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CSSPWQInputParam.html" data-type="entity-link">CSSPWQInputParam</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CalDecay.html" data-type="entity-link">CalDecay</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Classification.html" data-type="entity-link">Classification</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClassificationExtraA.html" data-type="entity-link">ClassificationExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClassificationExtraB.html" data-type="entity-link">ClassificationExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateDataValue.html" data-type="entity-link">ClimateDataValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateDataValueExtraA.html" data-type="entity-link">ClimateDataValueExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateDataValueExtraB.html" data-type="entity-link">ClimateDataValueExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateSite.html" data-type="entity-link">ClimateSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateSiteExtraA.html" data-type="entity-link">ClimateSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClimateSiteExtraB.html" data-type="entity-link">ClimateSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Contact.html" data-type="entity-link">Contact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactExtraA.html" data-type="entity-link">ContactExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactExtraB.html" data-type="entity-link">ContactExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactOK.html" data-type="entity-link">ContactOK</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactPreference.html" data-type="entity-link">ContactPreference</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactPreferenceExtraA.html" data-type="entity-link">ContactPreferenceExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactPreferenceExtraB.html" data-type="entity-link">ContactPreferenceExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactSearch.html" data-type="entity-link">ContactSearch</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactShortcut.html" data-type="entity-link">ContactShortcut</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactShortcutExtraA.html" data-type="entity-link">ContactShortcutExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactShortcutExtraB.html" data-type="entity-link">ContactShortcutExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContourPolygon.html" data-type="entity-link">ContourPolygon</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Coord.html" data-type="entity-link">Coord</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DBTable.html" data-type="entity-link">DBTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataPathOfTide.html" data-type="entity-link">DataPathOfTide</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocTemplate.html" data-type="entity-link">DocTemplate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocTemplateExtraA.html" data-type="entity-link">DocTemplateExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocTemplateExtraB.html" data-type="entity-link">DocTemplateExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Element.html" data-type="entity-link">Element</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ElementLayer.html" data-type="entity-link">ElementLayer</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Email.html" data-type="entity-link">Email</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionList.html" data-type="entity-link">EmailDistributionList</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContact.html" data-type="entity-link">EmailDistributionListContact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContactExtraA.html" data-type="entity-link">EmailDistributionListContactExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContactExtraB.html" data-type="entity-link">EmailDistributionListContactExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContactLanguage.html" data-type="entity-link">EmailDistributionListContactLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContactLanguageExtraA.html" data-type="entity-link">EmailDistributionListContactLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListContactLanguageExtraB.html" data-type="entity-link">EmailDistributionListContactLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListExtraA.html" data-type="entity-link">EmailDistributionListExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListExtraB.html" data-type="entity-link">EmailDistributionListExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListLanguage.html" data-type="entity-link">EmailDistributionListLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListLanguageExtraA.html" data-type="entity-link">EmailDistributionListLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailDistributionListLanguageExtraB.html" data-type="entity-link">EmailDistributionListLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailExtraA.html" data-type="entity-link">EmailExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailExtraB.html" data-type="entity-link">EmailExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Error.html" data-type="entity-link">Error</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FileItem.html" data-type="entity-link">FileItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FileItemList.html" data-type="entity-link">FileItemList</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FilePurposeAndText.html" data-type="entity-link">FilePurposeAndText</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricDataValue.html" data-type="entity-link">HydrometricDataValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricDataValueExtraA.html" data-type="entity-link">HydrometricDataValueExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricDataValueExtraB.html" data-type="entity-link">HydrometricDataValueExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricSite.html" data-type="entity-link">HydrometricSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricSiteExtraA.html" data-type="entity-link">HydrometricSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HydrometricSiteExtraB.html" data-type="entity-link">HydrometricSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Infrastructure.html" data-type="entity-link">Infrastructure</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InfrastructureExtraA.html" data-type="entity-link">InfrastructureExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InfrastructureExtraB.html" data-type="entity-link">InfrastructureExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InfrastructureLanguage.html" data-type="entity-link">InfrastructureLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InfrastructureLanguageExtraA.html" data-type="entity-link">InfrastructureLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InfrastructureLanguageExtraB.html" data-type="entity-link">InfrastructureLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InputSummary.html" data-type="entity-link">InputSummary</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheet.html" data-type="entity-link">LabSheet</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetA1Measurement.html" data-type="entity-link">LabSheetA1Measurement</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetA1Sheet.html" data-type="entity-link">LabSheetA1Sheet</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetAndA1Sheet.html" data-type="entity-link">LabSheetAndA1Sheet</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetDetail.html" data-type="entity-link">LabSheetDetail</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetDetailExtraA.html" data-type="entity-link">LabSheetDetailExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetDetailExtraB.html" data-type="entity-link">LabSheetDetailExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetExtraA.html" data-type="entity-link">LabSheetExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetExtraB.html" data-type="entity-link">LabSheetExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetTubeMPNDetail.html" data-type="entity-link">LabSheetTubeMPNDetail</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetTubeMPNDetailExtraA.html" data-type="entity-link">LabSheetTubeMPNDetailExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LabSheetTubeMPNDetailExtraB.html" data-type="entity-link">LabSheetTubeMPNDetailExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LastUpdate.html" data-type="entity-link">LastUpdate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LastUpdateAndContact.html" data-type="entity-link">LastUpdateAndContact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LastUpdateAndTVText.html" data-type="entity-link">LastUpdateAndTVText</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LatLng.html" data-type="entity-link">LatLng</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Log.html" data-type="entity-link">Log</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LogExtraA.html" data-type="entity-link">LogExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LogExtraB.html" data-type="entity-link">LogExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMAnalysisReportParameter.html" data-type="entity-link">MWQMAnalysisReportParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMAnalysisReportParameterExtraA.html" data-type="entity-link">MWQMAnalysisReportParameterExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMAnalysisReportParameterExtraB.html" data-type="entity-link">MWQMAnalysisReportParameterExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMLookupMPN.html" data-type="entity-link">MWQMLookupMPN</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMLookupMPNExtraA.html" data-type="entity-link">MWQMLookupMPNExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMLookupMPNExtraB.html" data-type="entity-link">MWQMLookupMPNExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRun.html" data-type="entity-link">MWQMRun</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRunExtraA.html" data-type="entity-link">MWQMRunExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRunExtraB.html" data-type="entity-link">MWQMRunExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRunLanguage.html" data-type="entity-link">MWQMRunLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRunLanguageExtraA.html" data-type="entity-link">MWQMRunLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMRunLanguageExtraB.html" data-type="entity-link">MWQMRunLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSample.html" data-type="entity-link">MWQMSample</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleDuplicateItem.html" data-type="entity-link">MWQMSampleDuplicateItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleExtraA.html" data-type="entity-link">MWQMSampleExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleExtraB.html" data-type="entity-link">MWQMSampleExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleLanguage.html" data-type="entity-link">MWQMSampleLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleLanguageExtraA.html" data-type="entity-link">MWQMSampleLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSampleLanguageExtraB.html" data-type="entity-link">MWQMSampleLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSite.html" data-type="entity-link">MWQMSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteExtraA.html" data-type="entity-link">MWQMSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteExtraB.html" data-type="entity-link">MWQMSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSitePolSourceSite.html" data-type="entity-link">MWQMSitePolSourceSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSitePolSourceSiteExtraA.html" data-type="entity-link">MWQMSitePolSourceSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSitePolSourceSiteExtraB.html" data-type="entity-link">MWQMSitePolSourceSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteSampleFC.html" data-type="entity-link">MWQMSiteSampleFC</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteStartEndDate.html" data-type="entity-link">MWQMSiteStartEndDate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteStartEndDateExtraA.html" data-type="entity-link">MWQMSiteStartEndDateExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSiteStartEndDateExtraB.html" data-type="entity-link">MWQMSiteStartEndDateExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsector.html" data-type="entity-link">MWQMSubsector</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsectorExtraA.html" data-type="entity-link">MWQMSubsectorExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsectorExtraB.html" data-type="entity-link">MWQMSubsectorExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsectorLanguage.html" data-type="entity-link">MWQMSubsectorLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsectorLanguageExtraA.html" data-type="entity-link">MWQMSubsectorLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MWQMSubsectorLanguageExtraB.html" data-type="entity-link">MWQMSubsectorLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfo.html" data-type="entity-link">MapInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfoExtraA.html" data-type="entity-link">MapInfoExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfoExtraB.html" data-type="entity-link">MapInfoExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfoPoint.html" data-type="entity-link">MapInfoPoint</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfoPointExtraA.html" data-type="entity-link">MapInfoPointExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapInfoPointExtraB.html" data-type="entity-link">MapInfoPointExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapObj.html" data-type="entity-link">MapObj</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeBoundaryCondition.html" data-type="entity-link">MikeBoundaryCondition</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeBoundaryConditionExtraA.html" data-type="entity-link">MikeBoundaryConditionExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeBoundaryConditionExtraB.html" data-type="entity-link">MikeBoundaryConditionExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeScenario.html" data-type="entity-link">MikeScenario</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeScenarioExtraA.html" data-type="entity-link">MikeScenarioExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeScenarioExtraB.html" data-type="entity-link">MikeScenarioExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSource.html" data-type="entity-link">MikeSource</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSourceExtraA.html" data-type="entity-link">MikeSourceExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSourceExtraB.html" data-type="entity-link">MikeSourceExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSourceStartEnd.html" data-type="entity-link">MikeSourceStartEnd</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSourceStartEndExtraA.html" data-type="entity-link">MikeSourceStartEndExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MikeSourceStartEndExtraB.html" data-type="entity-link">MikeSourceStartEndExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NewContact.html" data-type="entity-link">NewContact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Node.html" data-type="entity-link">Node</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NodeLayer.html" data-type="entity-link">NodeLayer</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OtherFilesToUpload.html" data-type="entity-link">OtherFilesToUpload</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceInactiveReasonEnumTextAndID.html" data-type="entity-link">PolSourceInactiveReasonEnumTextAndID</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObsInfoChild.html" data-type="entity-link">PolSourceObsInfoChild</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObsInfoEnumTextAndID.html" data-type="entity-link">PolSourceObsInfoEnumTextAndID</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservation.html" data-type="entity-link">PolSourceObservation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservationExtraA.html" data-type="entity-link">PolSourceObservationExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservationExtraB.html" data-type="entity-link">PolSourceObservationExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservationIssue.html" data-type="entity-link">PolSourceObservationIssue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservationIssueExtraA.html" data-type="entity-link">PolSourceObservationIssueExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceObservationIssueExtraB.html" data-type="entity-link">PolSourceObservationIssueExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceSite.html" data-type="entity-link">PolSourceSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceSiteExtraA.html" data-type="entity-link">PolSourceSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolSourceSiteExtraB.html" data-type="entity-link">PolSourceSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PolyPoint.html" data-type="entity-link">PolyPoint</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/QueryBuilder.html" data-type="entity-link">QueryBuilder</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RTBStringPos.html" data-type="entity-link">RTBStringPos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RainExceedance.html" data-type="entity-link">RainExceedance</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RainExceedanceExtraA.html" data-type="entity-link">RainExceedanceExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RainExceedanceExtraB.html" data-type="entity-link">RainExceedanceExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurve.html" data-type="entity-link">RatingCurve</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurveExtraA.html" data-type="entity-link">RatingCurveExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurveExtraB.html" data-type="entity-link">RatingCurveExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurveValue.html" data-type="entity-link">RatingCurveValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurveValueExtraA.html" data-type="entity-link">RatingCurveValueExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RatingCurveValueExtraB.html" data-type="entity-link">RatingCurveValueExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Register.html" data-type="entity-link">Register</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSection.html" data-type="entity-link">ReportSection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSectionExtraA.html" data-type="entity-link">ReportSectionExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSectionExtraB.html" data-type="entity-link">ReportSectionExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSectionLanguage.html" data-type="entity-link">ReportSectionLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSectionLanguageExtraA.html" data-type="entity-link">ReportSectionLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportSectionLanguageExtraB.html" data-type="entity-link">ReportSectionLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportType.html" data-type="entity-link">ReportType</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportTypeExtraA.html" data-type="entity-link">ReportTypeExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportTypeExtraB.html" data-type="entity-link">ReportTypeExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportTypeLanguage.html" data-type="entity-link">ReportTypeLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportTypeLanguageExtraA.html" data-type="entity-link">ReportTypeLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReportTypeLanguageExtraB.html" data-type="entity-link">ReportTypeLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResetPassword.html" data-type="entity-link">ResetPassword</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResetPasswordExtraA.html" data-type="entity-link">ResetPasswordExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResetPasswordExtraB.html" data-type="entity-link">ResetPasswordExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlan.html" data-type="entity-link">SamplingPlan</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanAndFilesLabSheetCount.html" data-type="entity-link">SamplingPlanAndFilesLabSheetCount</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanEmail.html" data-type="entity-link">SamplingPlanEmail</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanEmailExtraA.html" data-type="entity-link">SamplingPlanEmailExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanEmailExtraB.html" data-type="entity-link">SamplingPlanEmailExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanExtraA.html" data-type="entity-link">SamplingPlanExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanExtraB.html" data-type="entity-link">SamplingPlanExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsector.html" data-type="entity-link">SamplingPlanSubsector</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsectorExtraA.html" data-type="entity-link">SamplingPlanSubsectorExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsectorExtraB.html" data-type="entity-link">SamplingPlanSubsectorExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsectorSite.html" data-type="entity-link">SamplingPlanSubsectorSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsectorSiteExtraA.html" data-type="entity-link">SamplingPlanSubsectorSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SamplingPlanSubsectorSiteExtraB.html" data-type="entity-link">SamplingPlanSubsectorSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Search.html" data-type="entity-link">Search</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SearchTagAndTerms.html" data-type="entity-link">SearchTagAndTerms</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Spill.html" data-type="entity-link">Spill</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SpillExtraA.html" data-type="entity-link">SpillExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SpillExtraB.html" data-type="entity-link">SpillExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SpillLanguage.html" data-type="entity-link">SpillLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SpillLanguageExtraA.html" data-type="entity-link">SpillLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SpillLanguageExtraB.html" data-type="entity-link">SpillLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SubsectorMWQMSampleYear.html" data-type="entity-link">SubsectorMWQMSampleYear</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFile.html" data-type="entity-link">TVFile</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFileExtraA.html" data-type="entity-link">TVFileExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFileExtraB.html" data-type="entity-link">TVFileExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFileLanguage.html" data-type="entity-link">TVFileLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFileLanguageExtraA.html" data-type="entity-link">TVFileLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFileLanguageExtraB.html" data-type="entity-link">TVFileLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVFullText.html" data-type="entity-link">TVFullText</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItem.html" data-type="entity-link">TVItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemExtraA.html" data-type="entity-link">TVItemExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemExtraB.html" data-type="entity-link">TVItemExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemInfrastructureTypeTVItemLink.html" data-type="entity-link">TVItemInfrastructureTypeTVItemLink</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLanguage.html" data-type="entity-link">TVItemLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLanguageExtraA.html" data-type="entity-link">TVItemLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLanguageExtraB.html" data-type="entity-link">TVItemLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLink.html" data-type="entity-link">TVItemLink</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLinkExtraA.html" data-type="entity-link">TVItemLinkExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemLinkExtraB.html" data-type="entity-link">TVItemLinkExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemStat.html" data-type="entity-link">TVItemStat</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemStatExtraA.html" data-type="entity-link">TVItemStatExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemStatExtraB.html" data-type="entity-link">TVItemStatExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemSubsectorAndMWQMSite.html" data-type="entity-link">TVItemSubsectorAndMWQMSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemTVAuth.html" data-type="entity-link">TVItemTVAuth</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemUserAuthorization.html" data-type="entity-link">TVItemUserAuthorization</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemUserAuthorizationExtraA.html" data-type="entity-link">TVItemUserAuthorizationExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVItemUserAuthorizationExtraB.html" data-type="entity-link">TVItemUserAuthorizationExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVLocation.html" data-type="entity-link">TVLocation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVTextLanguage.html" data-type="entity-link">TVTextLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVTypeNamesAndPath.html" data-type="entity-link">TVTypeNamesAndPath</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVTypeUserAuthorization.html" data-type="entity-link">TVTypeUserAuthorization</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVTypeUserAuthorizationExtraA.html" data-type="entity-link">TVTypeUserAuthorizationExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TVTypeUserAuthorizationExtraB.html" data-type="entity-link">TVTypeUserAuthorizationExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Tel.html" data-type="entity-link">Tel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TelExtraA.html" data-type="entity-link">TelExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TelExtraB.html" data-type="entity-link">TelExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideDataValue.html" data-type="entity-link">TideDataValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideDataValueExtraA.html" data-type="entity-link">TideDataValueExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideDataValueExtraB.html" data-type="entity-link">TideDataValueExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideLocation.html" data-type="entity-link">TideLocation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideLocationExtraA.html" data-type="entity-link">TideLocationExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideLocationExtraB.html" data-type="entity-link">TideLocationExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideSite.html" data-type="entity-link">TideSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideSiteExtraA.html" data-type="entity-link">TideSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TideSiteExtraB.html" data-type="entity-link">TideSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Transaction.html" data-type="entity-link">Transaction</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/URLNumberOfSamples.html" data-type="entity-link">URLNumberOfSamples</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UseOfSite.html" data-type="entity-link">UseOfSite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UseOfSiteExtraA.html" data-type="entity-link">UseOfSiteExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UseOfSiteExtraB.html" data-type="entity-link">UseOfSiteExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPAmbient.html" data-type="entity-link">VPAmbient</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPAmbientExtraA.html" data-type="entity-link">VPAmbientExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPAmbientExtraB.html" data-type="entity-link">VPAmbientExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPFull.html" data-type="entity-link">VPFull</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPResValues.html" data-type="entity-link">VPResValues</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPResult.html" data-type="entity-link">VPResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPResultExtraA.html" data-type="entity-link">VPResultExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPResultExtraB.html" data-type="entity-link">VPResultExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenario.html" data-type="entity-link">VPScenario</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioExtraA.html" data-type="entity-link">VPScenarioExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioExtraB.html" data-type="entity-link">VPScenarioExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioIDAndRawResults.html" data-type="entity-link">VPScenarioIDAndRawResults</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioLanguage.html" data-type="entity-link">VPScenarioLanguage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioLanguageExtraA.html" data-type="entity-link">VPScenarioLanguageExtraA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/VPScenarioLanguageExtraB.html" data-type="entity-link">VPScenarioLanguageExtraB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ValidationResult.html" data-type="entity-link">ValidationResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Vector.html" data-type="entity-link">Vector</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/WhereInfo.html" data-type="entity-link">WhereInfo</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
