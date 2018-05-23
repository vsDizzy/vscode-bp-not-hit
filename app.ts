import * as ts from 'typescript';
import formatDiagnosticsHost from './format-diagnostics.host';
import system from './system';

const config = ts.findConfigFile(undefined, ts.sys.fileExists);

const compilerHost = ts.createWatchCompilerHost(config, undefined, system,
  ts.createSemanticDiagnosticsBuilderProgram, undefined, formatDiagnosticsHost.reportWatchStatus);

ts.createWatchProgram(compilerHost);

console.log('ok');
