import * as path from 'path';
import modelAlias from 'module-alias';

//Pega o diretório que estamos com o __dirname, volta duas pastas e importa todos os arquivos;
const files = path.resolve(__dirname, '../..');

//Adicionar alias pro srs e pro test
modelAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
})
