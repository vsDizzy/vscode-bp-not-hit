import * as ts from 'typescript';
import system from './system';

export abstract class FormatDiagnosticsHostBase implements ts.FormatDiagnosticsHost {
  public getCurrentDirectory = system.getCurrentDirectory;

  public getCanonicalFileName(fileName: string): string {
    return fileName;
  }

  public getNewLine(): string {
    return system.newLine;
  }
}
