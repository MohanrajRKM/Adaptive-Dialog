import{j as e}from"./index-CTAXdLKx.js";import{r as h}from"./index-D5jfS-9e.js";import{u as S,G as R,a as T,C as M,b as a}from"./useGridTheme-D_xnm8-I.js";import{u as v,a as y}from"./useClipboard-PRpUF8lk.js";import"./client-Spw3EFno.js";import{u as E}from"./usePager-B2SiKRMP.js";import{u as b}from"./useContextMenu-CFnMkr8w.js";import"./useToolbar-UKD0uxyi.js";const s=["Alice","Brian","Carla","Devon"],l=["Open","In Progress","Done"],j=()=>{var u,c;const d=[];let n=1;for(let t=0;t<8;t++){const g={id:n++,name:`Epic ${t+1}`,owner:s[t%s.length],effort:40+t*5,status:l[t%l.length],children:[]};for(let r=0;r<3;r++){const p={id:n++,name:`Story ${t+1}.${r+1}`,owner:s[(t+r)%s.length],effort:8+r,status:l[(t+r+1)%l.length],children:[]};for(let o=0;o<3;o++)(u=p.children)==null||u.push({id:n++,name:`Task ${t+1}.${r+1}.${o+1}`,owner:s[(t+r+o)%s.length],effort:1+o,status:l[(t+o)%l.length]});(c=g.children)==null||c.push(p)}d.push(g)}return d},i=()=>{S("material");const d=h.useRef(null),n=h.useRef(null);n.current===null&&(n.current=j());const[u,c]=h.useState(0),t={TreeDataModule:T,EditModule:y,ContextMenuModule:b,ClipboardModule:v,PagerModule:E},g=()=>{c(r=>r+1)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid Context Menu - Nested Children Mode"}),e.jsxs("p",{children:["Right-click a tree row for ",e.jsx("strong",{children:"Edit"}),", ",e.jsx("strong",{children:"Delete"}),",",e.jsx("strong",{children:" Select/Unselect Row"}),", ",e.jsx("strong",{children:"Expand / Collapse"}),",",e.jsx("strong",{children:" Expand All / Collapse All"})," and ",e.jsx("strong",{children:"Cut / Copy / Paste"}),". Right-click a header cell for ",e.jsx("strong",{children:"Sort Ascending / Descending"})," and",e.jsx("strong",{children:" Auto Fit"}),". Right-click the pager for paging commands."]}),e.jsx(R,{ref:d,dataSource:n.current??[],isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"},contextMenuSettings:{enabled:!0,items:["Edit","Delete","SelectRow","UnselectRow","ClearRowSelection","ClearSelection","Expand","Collapse","ExpandAll","CollapseAll","Cut","Copy","Paste"]},clipboardSettings:{enabled:!0,allowPaste:!0,allowCut:!0},pageSettings:{enabled:!0,pageSize:30},sortSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},onDataChangeComplete:g,height:"520px",style:{marginTop:"12px"},modules:t,children:e.jsxs(M,{children:[e.jsx(a,{field:"id",headerText:"ID",isPrimaryKey:!0,width:80}),e.jsx(a,{field:"name",headerText:"Task",width:260}),e.jsx(a,{field:"owner",headerText:"Owner",width:120}),e.jsx(a,{field:"effort",headerText:"Effort (h)",width:110,textAlign:"Right"}),e.jsx(a,{field:"status",headerText:"Status",width:120})]})}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsxs("h3",{children:["Source data (v",u,")"]}),e.jsx("pre",{style:{maxHeight:"220px",overflow:"auto",background:"#f6f8fa",padding:"12px"},children:JSON.stringify(n.current,null,2)})]})]})},U={title:"Grid/Tree ContextMenu/Nested Children",component:i};var x,f,m,C,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  const datasourceRef = useRef<Task[] | null>(null);
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
            <h1>TreeGrid Context Menu - Nested Children Mode</h1>\r
            <p>\r
                Right-click a tree row for <strong>Edit</strong>, <strong>Delete</strong>,\r
                <strong> Select/Unselect Row</strong>, <strong>Expand / Collapse</strong>,\r
                <strong> Expand All / Collapse All</strong> and <strong>Cut / Copy / Paste</strong>.\r
                Right-click a header cell for <strong>Sort Ascending / Descending</strong> and\r
                <strong> Auto Fit</strong>. Right-click the pager for paging commands.\r
            </p>\r
            <Grid ref={gridRef} dataSource={datasourceRef.current ?? []} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField='children' editSettings={{
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
                    <Column field='name' headerText='Task' width={260} />\r
                    <Column field='owner' headerText='Owner' width={120} />\r
                    <Column field='effort' headerText='Effort (h)' width={110} textAlign='Right' />\r
                    <Column field='status' headerText='Status' width={120} />\r
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
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source},description:{story:`TreeGrid Context Menu - Nested Children Mode.\r

Right-click a tree row to use the CRUD, selection, expansion and clipboard\r
commands; right-click a header cell for sort and auto-fit; right-click the\r
pager for paging. The preview block below the grid prints the authoritative\r
source after every mutation.`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};const V=["TreeGridContextMenuNested"];export{i as TreeGridContextMenuNested,V as __namedExportsOrder,U as default};
