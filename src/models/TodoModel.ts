class TodoModel {
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;

  constructor(rowNumber: number, rowDescription: string, rowAssigned: string) {
    this.rowNumber = rowNumber;
    this.rowDescription = rowDescription;
    this.rowAssigned = rowAssigned;
  }

  //   get rowNumber(): number {
  //     return this.rowNumber;
  //   }
  //   set rowNmber(rowNumber: number) {
  //     this.rowNumber = rowNumber;
  //   }
}
