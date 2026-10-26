// Rasterize original SVGs with Sharp/libvips. No external source imagery.
const fs=require('fs'), path=require('path'),sharp=require('sharp');
const dir=__dirname, ids=['transmutation','augmentation','regal','exalted','chaos','divine'];
const names=['TIDE SEED','TWIN-BUD SPINDLE','CROWNED SEAL','WINGED SUN SHARD','RIFT WHEEL','BALANCE RELIQUARY'];
(async()=>{
 let items=[];
 for(let i=0;i<ids.length;i++) {
  const x=24+(i%3)*336,y=96+Math.floor(i/3)*282;
  const svg=fs.readFileSync(path.join(dir,ids[i]+'.svg'));
  await sharp(svg).resize(256,256,{kernel:'nearest'}).png().toFile(path.join(dir,ids[i]+'.png'));
  const large=await sharp(svg).resize(192,192,{kernel:'nearest'}).png().toBuffer();
  const small=await sharp(svg).resize(64,64,{kernel:'nearest'}).png().toBuffer();
  items.push({input:large,left:x+8,top:y+33},{input:small,left:x+235,top:y+62},{input:small,left:x+235,top:y+148});
 }
 let bg=`<svg xmlns="http://www.w3.org/2000/svg" width="1056" height="690"><rect width="1056" height="690" fill="#f2efdf"/><text x="30" y="38" font-family="sans-serif" font-size="22" font-weight="700" fill="#314e46">FORGE CURRENCIES / ORIGINAL PIXEL SCULPTURES</text><text x="31" y="64" font-family="sans-serif" font-size="13" fill="#718075">Six distinct silhouettes · 64 × 64 native grid · flat colors, stepped edges, transparent SVG / PNG</text>`;
 for(let i=0;i<ids.length;i++){let x=24+i%3*336,y=96+Math.floor(i/3)*282;bg+=`<rect x="${x}" y="${y}" width="320" height="258" rx="8" fill="#e8e8d8" stroke="#d2d7c4"/><text x="${x+16}" y="${y+24}" font-family="sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#526c5b">0${i+1} / ${names[i]}</text><rect x="${x+227}" y="${y+54}" width="80" height="80" rx="5" fill="#f6f1df"/><rect x="${x+227}" y="${y+140}" width="80" height="80" rx="5" fill="#2c3936"/><text x="${x+17}" y="${y+242}" font-family="monospace" font-size="13" fill="#657768">${ids[i]} / 192px + 64px</text>`;}
 bg+='</svg>';await sharp(Buffer.from(bg)).composite(items).png().toFile(path.join(dir,'contact-sheet.png'));console.log(path.join(dir,'contact-sheet.png'));
})();
