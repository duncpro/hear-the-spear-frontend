declare interface MusicKit {
  configure(config: AppleMusicConfig): void;
  getInstance(): MusicKitInstance;
}

declare interface MusicKitInstance {
  authorize(): Promise<string>;
}

declare interface AppleMusicConfig {
  developerToken: string;
  app: {
    name: string,
    build: string
  };
}

declare var MusicKit: MusicKit;
