/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { CSSPError } from './cssperror.interface';
import { VPAmbient } from './vpambient.interface';
import { VPResult } from './vpresult.interface';
import { VPScenario } from './vpscenario.interface';

export interface VPFull extends CSSPError {
    VPAmbientList: VPAmbient[];
    VPResultList: VPResult[];
    VPScenario: VPScenario;
}
