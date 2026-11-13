import{j as e}from"./index-CTAXdLKx.js";import{r as s}from"./index-D5jfS-9e.js";import{u as h,G as g,a as C,C as w,b as u}from"./useGridTheme-D_xnm8-I.js";import{u as M,a as S}from"./useClipboard-PRpUF8lk.js";import"./client-Spw3EFno.js";import{u as v}from"./usePager-B2SiKRMP.js";import{u as I}from"./useContextMenu-CFnMkr8w.js";import"./useToolbar-UKD0uxyi.js";const R=()=>{const a=[];let r=1;for(let t=0;t<4;t++){const o={id:r++,name:`Drive ${String.fromCharCode(65+t)}`,size:0,parentId:null};a.push(o);for(let n=0;n<3;n++){const l={id:r++,name:`Folder ${t+1}.${n+1}`,size:100+n*10,parentId:o.id};a.push(l);for(let d=0;d<3;d++)a.push({id:r++,name:`File ${t+1}.${n+1}.${d+1}`,size:1+d,parentId:l.id})}}return a},i=()=>{h("material");const a=s.useRef(null),r=s.useRef(null);r.current===null&&(r.current=R());const[t,o]=s.useState(0),n={TreeDataModule:C,EditModule:S,ContextMenuModule:I,ClipboardModule:M,PagerModule:v},l=()=>{o(d=>d+1)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid Context Menu - Parent ID Mode"}),e.jsxs("p",{children:["The data source is a flat array where every record references its parent by ",e.jsx("code",{children:"parentId"}),". Right-click behaviour is identical to the nested-children sample."]}),e.jsx(g,{ref:a,dataSource:r.current??[],isTreeMode:!0,treeColumnIndex:0,treeDataIdMapping:"id",treeDataParentIdField:"parentId",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"},contextMenuSettings:{enabled:!0,items:["Edit","Delete","SelectRow","UnselectRow","ClearRowSelection","ClearSelection","Expand","Collapse","ExpandAll","CollapseAll","Cut","Copy","Paste"]},clipboardSettings:{enabled:!0,allowPaste:!0,allowCut:!0},pageSettings:{enabled:!0,pageSize:30},sortSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},onDataChangeComplete:l,height:"520px",style:{marginTop:"12px"},modules:n,children:e.jsxs(w,{children:[e.jsx(u,{field:"id",headerText:"ID",isPrimaryKey:!0,width:80}),e.jsx(u,{field:"name",headerText:"Name",width:260}),e.jsx(u,{field:"size",headerText:"Size (KB)",width:110,textAlign:"Right"})]})}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsxs("h3",{children:["Source data (v",t,")"]}),e.jsx("pre",{style:{maxHeight:"220px",overflow:"auto",background:"#f6f8fa",padding:"12px"},children:JSON.stringify(r.current,null,2)})]})]})},z={title:"Grid/Tree ContextMenu/Parent ID",component:i};var p,c,m,x,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  const datasourceRef = useRef<Folder[] | null>(null);
  if (datasourceRef.current === null) {
    datasourceRef.current = createSeedData();
  }
  const [previewVersion, setPreviewVersion] = useState<number>(0);
  const gridModules = {
    TreeDataModule,
    EditModule,
    ContextMenuModule,
    ClipboardModule,
    PagerModule
  };
  const refreshPreview = (): void => {
    setPreviewVersion((version: number): number => version + 1);
  };
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid Context Menu - Parent ID Mode</h1>\r
            <p>\r
                The data source is a flat array where every record references its\r
                parent by <code>parentId</code>. Right-click behaviour is identical\r
                to the nested-children sample.\r
            </p>\r
            <Grid ref={gridRef} dataSource={datasourceRef.current ?? []} isTreeMode={true} treeColumnIndex={0} treeDataIdMapping='id' treeDataParentIdField='parentId' editSettings={{
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal'
    }} contextMenuSettings={{
      enabled: true,
      items: ['Edit', 'Delete', 'SelectRow', 'UnselectRow', 'ClearRowSelection', 'ClearSelection', 'Expand', 'Collapse', 'ExpandAll', 'CollapseAll', 'Cut', 'Copy', 'Paste']
    }} clipboardSettings={{
      enabled: true,
      allowPaste: true,
      allowCut: true
    }} pageSettings={{
      enabled: true,
      pageSize: 30
    }} sortSettings={{
      enabled: true
    }} selectionSettings={{
      enabled: true,
      mode: 'Multiple',
      type: 'Row'
    }} onDataChangeComplete={refreshPreview} height='520px' style={{
      marginTop: '12px'
    }} modules={gridModules}>\r
                <Columns>\r
                    <Column field='id' headerText='ID' isPrimaryKey={true} width={80} />\r
                    <Column field='name' headerText='Name' width={260} />\r
                    <Column field='size' headerText='Size (KB)' width={110} textAlign='Right' />\r
                </Columns>\r
            </Grid>\r
\r
            <div style={{
      marginTop: '16px'
    }}>\r
                <h3>Source data (v{previewVersion})</h3>\r
                <pre style={{
        maxHeight: '220px',
        overflow: 'auto',
        background: '#f6f8fa',
        padding: '12px'
      }}>\r
                    {JSON.stringify(datasourceRef.current, null, 2)}\r
                </pre>\r
            </div>\r
        </div>;
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"TreeGrid Context Menu - Parent ID Mode.\r\n\nSame command surface as the nested-children sample, driven by a flat\r\nself-referential data source (`treeDataIdMapping` + `treeDataParentIdField`).",...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};const A=["TreeGridContextMenuParentId"];export{i as TreeGridContextMenuParentId,A as __namedExportsOrder,z as default};
