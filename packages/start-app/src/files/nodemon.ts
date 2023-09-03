export default function nodemonTemplate() {
  return JSON.stringify(
    {
      quiet: true,
      execMap: {
        ts: 'ts-node --project tsconfig.server.json',
      },
      ext: 'ts, js',
      ignore: ['**/*.jsx', '**/*.tsx', '**/*.mjs'],
      events: {
        restart: 'echo "Server restarted"',
        start: 'echo "Server starting..."',
      },
    },
    null,
    2
  );
}
