console.log('cwd', process.cwd()); console.log('module.filename', module.filename); console.log('paths', JSON.stringify(module.paths, null, 2)); console.log('vite', require.resolve('vite'));
