import * as ts from 'typescript';

export class System implements ts.System {
  public args: string[];
  public newLine: string;
  public useCaseSensitiveFileNames: boolean;

  public write(s: string): void {
    console.log(s);
  }

  public readFile(path: string, encoding?: string): string {
    console.info('read', path, encoding);
    debugger;
    throw new Error('Method not implemented.');
  }

  public writeFile(path: string, data: string, writeByteOrderMark?: boolean): void {
    throw new Error('Method not implemented.');
  }

  public watchFile?(path: string, callback: ts.FileWatcherCallback, pollingInterval?: number): ts.FileWatcher {
    throw new Error('Method not implemented.');
  }

  public watchDirectory?(path: string, callback: ts.DirectoryWatcherCallback, recursive?: boolean): ts.FileWatcher {
    throw new Error('Method not implemented.');
  }

  public resolvePath(path: string): string {
    throw new Error('Method not implemented.');
  }

  public fileExists(path: string): boolean {
    throw new Error('Method not implemented.');
  }

  public directoryExists(path: string): boolean {
    throw new Error('Method not implemented.');
  }

  public createDirectory(path: string): void {
    throw new Error('Method not implemented.');
  }

  public getExecutingFilePath(): string {
    throw new Error('Method not implemented.');
  }

  public getCurrentDirectory(): string {
    return '';
  }

  public getDirectories(path: string): string[] {
    throw new Error('Method not implemented.');
  }

  public readDirectory(
    path: string,
    extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>,
    include?: ReadonlyArray<string>, depth?: number): string[] {
    throw new Error('Method not implemented.');
  }

  public exit(exitCode?: number): void {
    console.log(`Exit code: ${exitCode}`);
  }
}

export default new System();
