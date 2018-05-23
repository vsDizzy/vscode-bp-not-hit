import * as ts from 'typescript';
import { FormatDiagnosticsHostBase } from './format-diagnostics.host-base';

export class FormatDiagnosticsHost extends FormatDiagnosticsHostBase {
  public reportWatchStatus(diagnostic: ts.Diagnostic) {
    console.info(ts.formatDiagnostic(diagnostic, this));
  }
}

export default new FormatDiagnosticsHost();
