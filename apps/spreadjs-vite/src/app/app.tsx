import GC from '@mescius/spread-sheets';
import '@mescius/spread-sheets-print';
import '@mescius/spread-sheets-shapes';
import '@mescius/spread-sheets-charts';
import '@mescius/spread-sheets-io';
import '@mescius/spread-sheets-formula-panel';
import '@mescius/spread-sheets-reportsheet-addon';
import '@mescius/spread-sheets-tablesheet';
import '@mescius/spread-sheets-designer-resources-en';
import '@mescius/spread-sheets-designer';
import { Designer } from '@mescius/spread-sheets-designer-react';

import '@mescius/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css';
import '@mescius/spread-sheets/styles/gc.spread.sheets.excel2013white.css';

// const spreadJSKey = 'spreadJSKey';
// const DesignerKey = 'DesignerKey';
// GC.Spread.Sheets.LicenseKey = spreadJSKey;
// (GC.Spread.Sheets as any).Designer.LicenseKey = DesignerKey;

export function App() {
  return (
    <div>
      <Designer styleInfo={{ width: '100%', height: '90vh' }} />
      {/* <NxWelcome title="spreadjs-vite" /> */}
    </div>
  );
}

export default App;
