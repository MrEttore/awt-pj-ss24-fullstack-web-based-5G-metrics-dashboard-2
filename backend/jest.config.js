module.exports = {
    // Der Basisordner für Jest, um nach Tests zu suchen
    roots: ['<rootDir>/tests'],
  
    // Die Umgebung, in der die Tests ausgeführt werden
    testEnvironment: 'node',
  
    // Glob-Muster, um Testdateien zu finden
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
  
    // Verzeichnisse und Dateien, die beim Testen ignoriert werden sollen
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
    // Automatische Mocking für bestimmte Module
    automock: false,
  
    // Module, die vor jedem Testlauf ausgeführt werden
    setupFiles: [],
  
    // Dateierweiterungen, die Jest analysiert
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    // Coverage-Berichte konfigurieren
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  
    // Konfiguration für benutzerdefinierte Reporter
    reporters: ['default']
  };
  