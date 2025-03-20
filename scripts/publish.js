import { npmPublish } from '@jsdevtools/npm-publish';

const args = process.argv.slice(2);
const packageName = args[0] || process.env.PACKAGE_NAME;
const token = process.env.NPM_TOKEN || 'fake';

async function main() {
  console.log(`Publishing ${packageName}`);

  try {
    await npmPublish({
      package: `packages/${packageName}`,
      token: token,
    });
    console.log('Package published successfully!');
  } catch (error) {
    console.error('Failed to publish package:', error);
    process.exit(1);
  }
}

main();
