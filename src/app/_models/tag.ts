export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#c1121f')
  static readonly PYTHON = new Tag('Python', '#edae49')
  static readonly JAVA = new Tag('Java', '#ff6b35')
  static readonly TYPESCRIPT = new Tag('TypeScript', '#004e89')
  static readonly C_SHARP = new Tag('C#', '#3a0ca3')

  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }
}
