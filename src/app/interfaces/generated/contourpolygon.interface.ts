/*
 * Auto generated from the CSSPWebToolsAngCodeWriter.proj by clicking on the [AngularInterfacesGenerate.cs] button
 *
 * Do not edit this file.
 *
 */

import { CSSPError } from './cssperror.interface';

import { Node } from './node.interface';

export interface ContourPolygon extends CSSPError {
    ContourNodeList: Node[];
    ContourValue: number;
    Depth_m: number;
    Layer: number;
}
