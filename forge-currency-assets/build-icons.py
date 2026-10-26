#!/usr/bin/env python3
"""Original code-native pixel sculpture. No input imagery, fonts, or external assets.
A deliberately hand-placed 64×64 grid is serialized as compact SVG paths.
"""
from pathlib import Path
from collections import defaultdict
import math, random, json
OUT=Path(__file__).resolve().parent
O='#2a3032'; DEEP='#38433f'; SHADE='#53584b'; BRONZE='#805d3d'; COPPER='#ac7947'; GOLD='#d1a660'; LIGHT='#efd39a'; WHITE='#fff0c4'

class Icon:
 def __init__(self,ident,title,description):
  self.ident=ident; self.title=title; self.description=description; self.p={}
 def dot(self,x,y,c):
  if 0<=x<64 and 0<=y<64:
   if c is None: self.p.pop((x,y),None)
   else:self.p[(x,y)]=c
 def rect(self,x,y,w,h,c):
  for yy in range(y,y+h):
   for xx in range(x,x+w):self.dot(xx,yy,c)
 def poly(self,pts,c):
  for y in range(max(0,math.floor(min(p[1] for p in pts))),min(64,math.ceil(max(p[1] for p in pts)))):
   for x in range(max(0,math.floor(min(p[0] for p in pts))),min(64,math.ceil(max(p[0] for p in pts)))):
    xx=x+.5; yy=y+.5; inside=False
    j=len(pts)-1
    for k in range(len(pts)):
     ax,ay=pts[k]; bx,by=pts[j]
     if ((ay>yy)!=(by>yy)) and xx<(bx-ax)*(yy-ay)/(by-ay)+ax:inside=not inside
     j=k
    if inside:self.dot(x,y,c)
 def line(self,points,c,width=1):
  for (x1,y1),(x2,y2) in zip(points,points[1:]):
   n=max(abs(x2-x1),abs(y2-y1))
   for i in range(n+1):
    x=round(x1+(x2-x1)*i/max(1,n));y=round(y1+(y2-y1)*i/max(1,n));self.rect(x,y,width,width,c)
 def ellipse(self,cx,cy,rx,ry,c):
  for y in range(max(0,math.floor(cy-ry)),min(64,math.ceil(cy+ry))):
   for x in range(max(0,math.floor(cx-rx)),min(64,math.ceil(cx+rx))):
    if ((x+.5-cx)/rx)**2+((y+.5-cy)/ry)**2<=1:self.dot(x,y,c)
 def oct(self,x,y,w,h,c):
  cut=max(2,min(w,h)//4);self.poly([(x+cut,y),(x+w-cut,y),(x+w,y+cut),(x+w,y+h-cut),(x+w-cut,y+h),(x+cut,y+h),(x,y+h-cut),(x,y+cut)],c)
 def gem(self,cx,cy,rx,ry,cols):
  dark,base,bright,shine=cols
  self.poly([(cx,cy-ry),(cx+rx,cy-ry//3),(cx+rx,cy+ry//3),(cx,cy+ry),(cx-rx,cy+ry//3),(cx-rx,cy-ry//3)],O)
  self.poly([(cx,cy-ry+2),(cx+rx-2,cy-ry//3),(cx+rx-2,cy+ry//3),(cx,cy+ry-2),(cx-rx+2,cy+ry//3),(cx-rx+2,cy-ry//3)],base)
  self.poly([(cx,cy-ry+2),(cx,cy),(cx-rx+2,cy+ry//3),(cx-rx+2,cy-ry//3)],bright)
  self.poly([(cx,cy),(cx+rx-2,cy-ry//3),(cx+rx-2,cy+ry//3),(cx,cy+ry-2)],dark)
  self.line([(cx-1,cy-ry+3),(cx-rx+3,cy-ry//3)],shine)
  self.rect(cx-2,cy-3,2,2,shine)
 def sparkle(self,x,y,c):
  self.rect(x,y-2,1,5,c);self.rect(x-2,y,5,1,c)
 def save(self):
  colors=defaultdict(list)
  for y in range(64):
   x=0
   while x<64:
    c=self.p.get((x,y));start=x;x+=1
    while x<64 and self.p.get((x,y))==c:x+=1
    if c:colors[c].append(f'M{start} {y}h{x-start}v1H{start}z')
  content=[f'<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 64 64" shape-rendering="crispEdges" role="img" aria-labelledby="title desc">',f'<title id="title">{self.title}</title>',f'<desc id="desc">{self.description}</desc>']
  for c,p in colors.items():content.append(f'<path fill="{c}" d="{"".join(p)}"/>')
  content.append('</svg>');(OUT/f'{self.ident}.svg').write_text('\n'.join(content))
  return {'id':self.ident,'title':self.title,'svg':f'{self.ident}.svg','png':f'{self.ident}.png','grid':64,'palette':len(colors),'opaque_pixels':len(self.p)}

icons=[]
# TRANSMUTATION / Tide seed: an aquamarine tear nested in a curled bronze shell.
a=Icon('transmutation','蜕变石 · 潮生种','Original pixel sculpture: a faceted tide-blue seed, emerging from an oxidized bronze spiral cradle.')
a.poly([(29,5),(36,8),(41,15),(47,22),(51,31),(52,40),(48,48),(41,55),(29,58),(19,54),(12,47),(10,38),(13,28),(19,21),(23,13)],O)
a.poly([(29,7),(35,10),(39,17),(45,23),(48,31),(49,40),(45,47),(39,52),(29,55),(20,51),(15,45),(13,37),(16,29),(22,23),(26,15)],BRONZE)
a.poly([(29,7),(35,10),(38,16),(33,15),(27,21),(23,29),(16,34),(14,41),(13,35),(17,27),(23,21),(25,15)],GOLD)
a.poly([(15,40),(19,48),(27,52),(36,51),(44,46),(49,38),(48,45),(40,53),(29,56),(20,52),(14,46)],'#674d36')
a.poly([(30,9),(35,14),(37,21),(44,27),(46,33),(45,40),(40,46),(32,49),(24,46),(20,39),(21,30),(26,22)],'#283e40')
a.poly([(30,11),(33,15),(34,23),(41,28),(43,33),(42,39),(37,44),(30,45),(24,41),(23,34),(26,25)],'#3c7f83')
a.poly([(30,12),(30,27),(24,34),(24,40),(23,34),(26,25)],'#9bc9bc')
a.poly([(30,13),(33,17),(33,24),(30,29),(27,33),(26,28)],'#d4e5cc')
a.poly([(30,28),(37,26),(42,31),(40,36),(34,38)],'#63a6aa')
a.poly([(34,38),(41,35),(41,40),(35,44),(30,44),(25,40),(28,37)],'#245b66')
a.line([(26,38),(28,41),(33,42)],'#75aaa5',1)
# Curled bronze band in front, physically occluding the crystal.
a.line([(17,34),(16,40),(19,47),(25,51),(33,51),(40,47),(42,42),(40,37),(35,35),(30,37),(29,41),(32,44),(36,43)],O,3)
a.line([(18,34),(17,40),(20,46),(25,49),(32,49),(38,46),(40,42),(38,38),(34,37),(31,39),(31,41),(33,42),(35,41)],COPPER,2)
a.line([(18,34),(18,39),(21,45),(26,48),(32,48),(37,45)],LIGHT)
a.line([(35,37),(38,39),(38,42)],GOLD)
a.rect(16,32,3,2,'#a1b19a');a.rect(22,49,2,2,'#4e7d6e');a.rect(29,52,4,1,'#688a70');a.rect(40,26,2,2,'#8ec4ba');a.rect(28,19,2,4,'#f0f0d4');a.rect(33,10,1,2,WHITE)
a.line([(43,27),(46,30),(47,34)],GOLD)
a.rect(17,27,2,2,LIGHT);a.rect(12,37,1,4,COPPER);a.rect(43,49,2,2,GOLD)
icons.append(a)
# AUGMENTATION / Twin-bud spindle: two growth crystals on silver prongs.
a=Icon('augmentation','增幅石 · 双芽棱针','Original pixel sculpture: a forked silver spindle with two jade crystal buds and an engraved central growth channel.')
# asymmetrical branches keep a recognizable fork silhouette
a.poly([(29,7),(35,7),(39,14),(38,21),(45,18),(50,11),(56,14),(55,26),(48,33),(41,35),(39,48),(34,57),(28,57),(23,49),(22,37),(15,33),(9,26),(9,17),(14,14),(20,20),(25,21),(25,14)],O)
a.poly([(29,10),(34,10),(36,15),(34,23),(32,31),(28,30),(27,23),(27,15)],'#83948d')
a.poly([(29,10),(32,10),(32,27),(29,28),(28,22),(28,15)],'#d1d8c3')
a.poly([(13,17),(17,21),(18,27),(24,28),(27,34),(24,37),(16,32),(11,25),(11,19)],'#83948d')
a.poly([(12,19),(15,19),(16,26),(22,29),(23,32),(16,30),(12,25)],'#c5d0c0')
a.poly([(49,15),(53,15),(52,24),(46,30),(39,32),(36,28),(43,24)],'#596f69')
a.poly([(50,15),(52,15),(51,22),(44,28),(38,29),(38,26),(44,23)],'#bdc8b5')
# ornament ring around the staff
a.oct(22,27,20,16,O);a.oct(24,29,16,12,BRONZE);a.oct(26,30,12,9,GOLD);a.oct(28,32,8,6,'#45594d')
a.rect(24,31,2,6,LIGHT);a.rect(29,29,5,1,WHITE);a.rect(37,33,2,6,COPPER)
a.poly([(26,39),(37,39),(36,48),(32,55),(29,55),(26,48)],'#687f75')
a.poly([(26,39),(30,40),(30,50),(32,53),(29,53),(27,47)],'#bbc5b3')
a.poly([(31,40),(34,40),(33,48),(31,51)],'#344f4d')
a.rect(29,42,2,5,'#f1e6bd');a.rect(29,49,2,2,GOLD)
a.gem(16,19,7,11,('#27594a','#43866b','#8bba90','#d4e1b5'))
a.gem(48,15,7,11,('#2f6756','#54997b','#a1c79c','#e6edc3'))
a.gem(31,30,6,10,('#386d57','#5d9b75','#b0cfa0','#eef1cb'))
# metal collars grip jade not floating
a.line([(11,26),(14,29),(18,29),(20,27)],BRONZE,2);a.line([(12,26),(15,28),(18,28)],LIGHT)
a.line([(43,23),(46,25),(50,23),(53,20)],BRONZE,2);a.line([(44,23),(47,24),(50,22)],GOLD)
a.rect(24,18,2,2,'#c3ba93');a.rect(37,43,2,4,COPPER);a.rect(26,48,1,2,WHITE);a.rect(15,10,2,3,'#e5edcc');a.rect(47,7,2,3,'#f6f4d6')
icons.append(a)
# REGAL / Crowned seal: broad octagon, coral cabochon, hammered gold laurel.
a=Icon('regal','富豪石 · 赤冠印','Original pixel sculpture: an octagonal hammered-gold seal, a red sunstone and a three-toothed ceremonial crown.')
a.poly([(10,27),(15,18),(22,15),(21,8),(27,12),(32,5),(37,12),(43,8),(42,16),(49,20),(55,29),(54,43),(47,52),(35,57),(24,56),(14,49),(9,39)],O)
a.poly([(12,28),(17,21),(24,18),(41,18),(48,23),(52,30),(51,42),(45,49),(34,54),(25,53),(17,47),(12,39)],BRONZE)
a.poly([(13,28),(18,22),(25,19),(40,19),(45,22),(44,25),(26,23),(18,29),(16,39),(12,37)],LIGHT)
a.poly([(17,29),(24,23),(40,23),(47,29),(47,41),(40,48),(27,50),(19,44)],O)
a.poly([(19,29),(25,25),(39,25),(45,30),(45,40),(39,46),(27,48),(21,43)],COPPER)
a.poly([(20,29),(26,26),(39,26),(41,29),(26,29),(23,36),(23,42),(20,40)],GOLD)
a.poly([(28,30),(36,28),(41,33),(40,41),(34,45),(27,42),(24,37)],'#5b3c36')
a.poly([(29,31),(35,30),(39,34),(38,40),(34,43),(28,40),(26,36)],'#af6149')
a.poly([(29,31),(35,30),(34,36),(27,38),(26,36)],'#e49c6f')
a.poly([(34,36),(39,34),(38,40),(34,43),(31,39)],'#7c413a')
a.rect(29,32,3,2,'#f8c994');a.rect(28,34,2,2,'#f3b781');a.rect(35,41,2,1,'#ce8055')
# laurel facets, individual metal leaves
for pts in [[(14,31),(18,32),(19,37),(15,35)],[(15,38),(20,39),(23,44),(18,43)],[(19,46),(24,44),(28,48),(24,50)],[(47,28),(49,32),(46,36),(44,32)],[(48,37),(48,41),(44,44),(43,39)],[(43,45),(40,49),(35,51),(37,47)]]:
 a.poly(pts,GOLD)
a.line([(15,30),(16,37),(19,43),(25,49)],'#f2d59a')
a.line([(49,31),(48,39),(44,46),(36,51)],COPPER)
# crown seated above octagon; open dark sockets, bold bright upper rim
a.poly([(22,10),(27,15),(32,7),(37,15),(42,10),(40,23),(24,23)],BRONZE)
a.poly([(24,13),(28,17),(32,10),(36,17),(40,13),(39,20),(25,20)],GOLD)
a.poly([(26,17),(29,18),(32,12),(33,16),(30,20),(26,20)],LIGHT)
a.rect(24,21,16,3,O);a.rect(25,21,14,2,GOLD);a.rect(26,21,7,1,WHITE)
a.rect(31,17,3,3,'#a34e3f');a.rect(31,17,1,1,'#efab7a');a.rect(32,8,1,2,WHITE)
a.rect(12,31,1,4,WHITE);a.rect(25,53,5,1,COPPER);a.rect(49,43,2,2,GOLD)
icons.append(a)
# EXALTED / Winged sun shard: three-point open gilded shrine around a fiery tablet.
a=Icon('exalted','崇高石 · 翼阳契','Original pixel sculpture: a high three-pointed gold shrine with folded wings around a luminous amber covenant shard.')
a.poly([(31,3),(35,10),(35,18),(40,21),(44,13),(52,10),(52,20),(58,16),(56,30),(49,39),(43,42),(42,49),(36,57),(29,60),(24,55),(21,46),(14,41),(8,33),(6,20),(12,24),(11,13),(20,16),(26,23),(28,17),(28,10)],O)
# wings darker bottom, sunlit upper faces
a.poly([(13,16),(19,19),(24,27),(26,38),(22,43),(16,38),(11,31),(9,24),(15,28)],BRONZE)
a.poly([(13,16),(18,19),(22,27),(22,33),(18,29),(15,24)],GOLD)
a.poly([(12,28),(17,32),(21,36),(22,41),(16,36)],COPPER)
a.line([(14,18),(17,20),(20,27)],LIGHT);a.line([(10,25),(12,30),(18,37)],GOLD)
a.poly([(49,14),(46,20),(41,27),(39,38),(43,41),(49,36),(53,29),(55,20),(48,25)],BRONZE)
a.poly([(49,14),(47,20),(42,27),(42,34),(46,29),(50,23)],GOLD)
a.poly([(53,24),(50,30),(46,35),(43,38),(43,41),(49,36),(53,29)],COPPER)
a.line([(48,15),(45,21),(42,26)],LIGHT);a.line([(54,21),(53,26),(49,31)],GOLD)
# central shard mount
a.poly([(31,5),(33,10),(33,20),(40,25),(43,34),(40,45),(39,49),(34,55),(29,57),(26,52),(23,44),(23,31),(27,23),(30,20),(30,11)],BRONZE)
a.poly([(31,7),(32,11),(32,21),(27,26),(25,34),(26,44),(29,52),(31,55),(28,54),(25,47),(24,40),(24,31),(28,23),(31,20)],LIGHT)
a.poly([(32,22),(38,26),(41,34),(38,43),(35,47),(29,50),(26,44),(25,34),(28,27)],O)
a.poly([(32,24),(37,28),(39,34),(36,42),(30,47),(28,42),(27,34),(29,28)],'#b57239')
a.poly([(32,24),(32,36),(28,42),(27,34),(29,28)],'#f0bd68')
a.poly([(32,25),(35,28),(35,33),(32,36)],'#fff0b1')
a.poly([(32,36),(39,34),(36,42),(30,47),(30,42)],'#985532')
a.poly([(33,34),(37,31),(38,35),(34,40),(31,41)],'#d89b45')
# tilted woven filigree and three clasp bolts
a.line([(26,33),(30,30),(35,31),(38,36),(35,41),(30,42)],GOLD)
a.line([(27,33),(30,31),(34,32)],WHITE)
a.rect(24,34,4,4,BRONZE);a.rect(24,34,3,2,LIGHT);a.rect(37,35,4,4,BRONZE);a.rect(38,35,2,2,GOLD)
a.poly([(29,47),(34,44),(36,47),(33,52),(30,53),(28,50)],GOLD)
a.rect(30,48,3,2,WHITE);a.rect(30,54,2,2,COPPER)
a.rect(15,34,2,1,LIGHT);a.rect(45,32,2,2,LIGHT);a.rect(31,12,1,5,WHITE)
icons.append(a)
# CHAOS / Rift wheel: five irregular violet-black plates rotate around split ivory core.
a=Icon('chaos','混沌石 · 裂相轮','Original pixel sculpture: a broken obsidian-violet wheel whose five offset stone plates surround a split rose-ivory core.')
# back blade silhouettes: intentionally imperfect, no skull face
a.poly([(29,6),(41,8),(48,14),(45,20),(54,25),(58,35),(53,42),(47,43),(47,51),(37,58),(25,56),(24,50),(14,49),(7,40),(9,28),(15,27),(14,18),(21,10)],O)
a.poly([(30,9),(40,10),(45,15),(41,21),(32,18),(25,21),(21,16),(23,12)],'#71677f')
a.poly([(30,9),(39,10),(43,13),(33,12),(25,16),(24,13)],'#b1a2ab')
a.poly([(42,22),(49,24),(54,31),(55,36),(50,40),(43,36),(42,29)],'#5e556e')
a.poly([(45,24),(49,25),(53,31),(52,34),(47,31)],'#958297')
a.poly([(42,40),(45,43),(44,50),(36,54),(29,53),(31,46),(37,42)],'#675b72')
a.poly([(43,43),(43,48),(36,52),(31,52),(33,49),(39,47)],'#9b7c91')
a.poly([(23,43),(27,47),(23,49),(16,47),(10,40),(11,33),(17,33),(20,38)],'#514a5d')
a.poly([(13,35),(15,35),(17,41),(22,44),(22,46),(16,44),(12,39)],'#897489')
a.poly([(16,20),(20,16),(24,21),(24,28),(20,33),(13,29),(11,27),(14,23)],'#817085')
a.poly([(17,20),(20,18),(22,21),(20,26),(15,29),(13,27)],'#c0a3af')
# old brass structural rim tying wheel edges
a.line([(28,12),(34,12),(39,14)],'#ba9b77');a.line([(50,29),(52,34),(50,37)],'#a3836c');a.line([(40,49),(36,51),(32,51)],'#c0a080');a.line([(13,38),(16,43),(19,44)],'#a88972')
# core: fractured polygon, three separate sides not eye / orb
a.poly([(29,20),(37,22),(43,29),(41,38),(34,45),(26,42),(21,35),(23,26)],O)
a.poly([(29,23),(34,23),(32,29),(26,32),(24,29),(26,26)],'#e2cbbb')
a.poly([(34,24),(38,27),(40,30),(38,35),(33,33),(34,29)],'#b98e9a')
a.poly([(25,33),(29,32),(32,36),(31,41),(27,39),(24,35)],'#a56f88')
a.poly([(34,35),(38,37),(35,41),(33,42)],'#d7acb0')
a.line([(28,25),(30,24),(32,24)],'#fff0ce');a.rect(25,28,2,2,'#f3ddc6');a.rect(36,28,2,2,'#e9c6bb')
# bright seam buried in the dark void
a.line([(32,22),(30,28),(32,31),(29,35),(32,39),(31,44)],'#523f61')
a.line([(31,27),(32,30),(30,34)],'#c27eac');a.rect(30,34,1,2,'#f4bad2');a.rect(32,38,1,3,'#e1a2bb')
# broken chips add mass and distinct texture
a.rect(39,9,2,1,'#d2c0bd');a.rect(52,31,1,2,'#c4a6aa');a.rect(21,52,3,2,'#725e73');a.rect(23,54,2,1,'#ab859c');a.rect(11,31,2,2,'#aa8a9c');a.rect(17,19,1,3,'#e2c0bb');a.rect(39,44,2,1,'#ba839f');a.rect(45,17,2,2,'#776279')
icons.append(a)
# DIVINE / Balance reliquary: ivory-gold hourglass with teal grains and vaulted handles.
a=Icon('divine','神圣石 · 衡命漏','Original pixel sculpture: an ivory hourglass reliquary, teal crystal sand and a gold balancing halo with stepped arched handles.')
a.poly([(25,5),(39,5),(44,10),(42,16),(48,20),(52,27),(53,39),(48,48),(42,51),(42,56),(38,59),(25,59),(21,55),(21,50),(15,47),(11,39),(11,28),(15,20),(22,16),(20,11)],O)
# exterior arch ring behind glass
a.poly([(22,18),(18,23),(15,29),(15,39),(19,45),(24,48),(24,52),(17,49),(13,44),(11,37),(12,28),(16,20),(22,16)],BRONZE)
a.line([(21,19),(17,24),(14,30),(14,38),(17,44),(21,47)],GOLD,2)
a.line([(20,20),(17,24),(15,29),(15,35)],LIGHT)
a.poly([(42,18),(46,23),(49,29),(49,39),(45,45),(40,48),(40,52),(47,49),(51,44),(53,37),(52,28),(48,20),(42,16)],BRONZE)
a.line([(43,19),(47,25),(50,31),(50,38),(47,44),(43,47)],GOLD)
a.line([(45,22),(48,27),(49,31)],LIGHT)
# The handle interiors are actual transparent holes, not painted black.
a.poly([(22,21),(20,23),(17,29),(17,38),(20,43),(22,44),(23,40),(27,33),(24,28)],None)
a.poly([(42,21),(44,23),(47,29),(47,38),(44,43),(42,44),(41,40),(37,33),(40,28)],None)
# top / bottom metal platforms
a.oct(21,8,23,10,BRONZE);a.oct(23,7,19,8,LIGHT);a.rect(25,7,14,2,WHITE);a.rect(23,13,19,3,COPPER)
a.oct(22,48,21,10,BRONZE);a.oct(23,49,19,7,GOLD);a.rect(25,49,15,2,LIGHT);a.rect(27,56,11,1,COPPER)
# ivory carved braces
a.poly([(22,17),(27,17),(28,23),(31,29),(29,33),(24,26)],'#d2cbb0')
a.poly([(23,17),(25,17),(26,24),(29,29),(28,31),(24,25)],'#fff0ce')
a.poly([(37,17),(42,17),(40,25),(35,33),(33,29),(36,23)],'#a59d82')
a.poly([(38,17),(41,17),(39,25),(35,30),(34,29),(37,23)],'#e9dfbd')
a.poly([(29,33),(32,35),(27,42),(27,49),(22,49),(23,41)],'#b9b397')
a.poly([(29,35),(30,36),(25,43),(25,49),(23,49),(24,42)],'#f1e7c5')
a.poly([(35,33),(40,41),(42,49),(37,49),(37,43),(32,35)],'#8d927c')
a.poly([(35,35),(38,40),(40,47),(38,47),(35,41),(33,37)],'#d9d7b5')
# glass diamond chambers and green grains
a.poly([(28,18),(36,18),(36,23),(32,29),(28,23)],'#456e69')
a.poly([(29,19),(35,19),(35,22),(32,27),(29,22)],'#82b2a1')
a.poly([(30,21),(35,21),(32,26)],'#cce1bb')
a.rect(29,19,2,2,'#ecf0ce');a.rect(32,27,1,3,'#c2dcb3');a.rect(31,31,2,2,GOLD)
a.poly([(32,37),(37,44),(37,48),(27,48),(27,44)],'#3e6e66')
a.poly([(32,39),(34,43),(37,46),(36,48),(28,48),(28,46)],'#6ea28b')
a.poly([(32,40),(33,43),(35,45),(28,46)],'#b7d0a4')
a.rect(31,36,2,2,'#c7d9aa');a.rect(29,46,5,1,'#e4e8b9')
# waist ring and engraved top crest
a.oct(28,30,9,6,BRONZE);a.rect(29,31,7,2,GOLD);a.rect(29,31,4,1,WHITE);a.rect(31,33,3,2,'#b77f47')
a.poly([(29,4),(35,4),(37,7),(32,11),(27,7)],O)
a.poly([(30,5),(34,5),(35,7),(32,9),(29,7)],GOLD);a.rect(30,5,4,1,WHITE)
a.rect(27,53,2,1,BRONZE);a.rect(31,53,2,1,BRONZE);a.rect(35,53,2,1,BRONZE)
a.rect(12,31,1,4,LIGHT);a.rect(50,36,1,3,COPPER);a.rect(20,47,1,2,LIGHT)
icons.append(a)
manifest=[i.save() for i in icons]
(OUT/'manifest.json').write_text(json.dumps({'version':1,'style':'Original 64-grid code-native pixel sculptures','license':'Original artwork created for this project; no third-party source assets.','icons':manifest},ensure_ascii=False,indent=2)+'\n')
print(json.dumps(manifest,ensure_ascii=False,indent=2))
