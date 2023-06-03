import { ProductsService } from 'src/app/services/products/products.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-mana-product',
  templateUrl: './mana-product.component.html',
  styleUrls: ['./mana-product.component.css'],
  providers: [MessageService]
})
export class ManaProductComponent {
  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  formData: FormData = new FormData();

  products: any[] = [];

  product: any = {};

  files:any = []

  selectedProducts: any[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  category: any = ''

  categories: any[] = [];

  dataUp: any
  rowsPerPageOptions = [5, 10, 20];
  constructor(private ProductsService: ProductsService, private CategoriesService: CategoriesService, private messageService: MessageService) { }
  ngOnInit() {
    this.ProductsService.getProducts().subscribe(
      (response) => {
        this.products = response
        // console.log(response)
      }
    )
    this.CategoriesService.getAllCategories().subscribe(
      (response: any) => {
        console.log(response.data)
        this.categories = response.data.map((item: any) => {
          return { label: item.name, value: item._id }
        })
      }
    )
    

  }
  openNew() {
    this.product = {};
    this.category=''
    console.log(this.product)
    this.submitted = false;
    this.productDialog = true;
  }

  onChangeFile(event:any){
    this.files = event.files;
    for (let i = 0; i < event.files.length; i++) {
      this.formData.append('imgs', event.files[i], event.files[i].name);
      
    }
    console.log(this.formData.getAll('imgs'));

  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editProduct(product: any) {
    this.product = { ...product };
    this.category = product?.categoryId?.name
    this.productDialog = true;
    
  }

  deleteProduct(product: any) {
    this.deleteProductDialog = true;
    this.product = { ...product };
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter(val => val._id !== this.product._id);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    this.product = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    // console.log(this.category)
    console.log(this.product)
    console.log(typeof this.formData)
    // console.log(this.categories)
    // console.log(this.categories.filter((item:any)=>item.label === this.category))
    this.formData.append("name", 'Product Awqeqweq1')
    this.formData.append("categoryId", "642f40c18d53ccc72a3af5d8")
    this.formData.append("description", "31231")
    this.formData.append("price", '123')
    // if(this.category){
    //   this.dataUp = {
    //     ...this.product,
    //     categoryId: this.categories.filter((item:any)=>item.label === this.category)[0].value,
    //     imgs:this.formData
    //   }
      
    // }
    this.ProductsService.createProduct(this.formData).subscribe(
      (response:any)=>{ 
        console.log(response)
      },
      (error:any)=>{
        console.log(error.error.message )
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    )
  }


  ///search for products
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
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
