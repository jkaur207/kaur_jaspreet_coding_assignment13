interface TableCellData {
    text: string;  
    color?: string; 
}

interface TableHeaderData {
    text: string;
    color?: string; 
}

interface TableFooterData {
    text: string; 
    color?: string; 
}

export interface TableProps {
    tableHeader: TableHeaderData[];  
    tableRows: TableCellData[][]; 
    tableFooter: TableFooterData[];   
    disabled?: boolean;             
}
  
  