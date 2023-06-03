import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-manacate',
  templateUrl: './manacate.component.html',
  styleUrls: ['./manacate.component.css'],
  providers: [MessageService]
})
export class ManacateComponent {
  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  formData: FormData = new FormData();

  categories: any[] = [];

  category: any = {};

  selectedProducts: any[] = [];

  submitted: boolean = false;

  cols: any[] = [];


  dataUp: any
  rowsPerPageOptions = [5, 10, 20];
  constructor(private ProductsService: ProductsService, private CategoriesService: CategoriesService, private messageService: MessageService) { }
  ngOnInit() {
    this.CategoriesService.getAllCategories().subscribe(
      (response:any) => {
        this.categories = response.data
        // console.log(response)
      }
    )

    

  }
  openNew() {
    this.category = {};
    console.log(this.category)
    this.submitted = false;
    this.productDialog = true;
  }


  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editProduct(product: any) {
    this.category = { ...product };
    this.productDialog = true;
    
  }

  deleteProduct(product: any) {
    this.deleteProductDialog = true;
    this.category = { ...product };
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.categories = this.categories.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.categories = this.categories.filter(val => val._id !== this.category._id);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    this.category = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    
  }


  ///search for categories
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }



  onGlobalFilter(table: any, event: any) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
