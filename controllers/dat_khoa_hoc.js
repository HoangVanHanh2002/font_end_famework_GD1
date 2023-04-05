window.dat_khoa_hoc = function ($scope, $routeParams) {
    
    $scope.tieu_de_dat = "Trang chọn mua khóa học"
    $scope.m="2"
    // $scope.kiemTraDuLieu = {
    //     ten: false,//chưa có lỗi gì mặc định là false
    //     tuoi: false,
    // }
    $scope.kiemtra={
        ten:false,
        phone:false,
        Email:false,
        address:false,
        mat_khau:false,
        ten:false,
        

    }
    $scope.onsubmitForm = function () {
        // alert(1)
        // validate nếu như tên bỏ trống
        // if (!$scope.inputValue_ten) {
        //     // có lỗi
        //     $scope.kiemtra.ten= true
        //     // $scope.kiemTraDuLieu.ten = true;//có lỗi là true;
        // }
        if ( !$scope.inputValue_ten) {
            // có lỗi
            $scope.kiemtra.ten = true;//có lỗi là true;
        }
       
        if( !$scope.inputValue_mat_khau){
            $scope.kiemtra.mat_khau=true
        }
        if( !$scope.inputValue_Email){
            $scope.kiemtra.Email=true
        }
        if( !$scope.inputValue_phone){
            $scope.kiemtra.phone=true
        }
        if( !$scope.inputValue_address){
            $scope.kiemtra.address=true
        }
       
        
       
        console.log($scope.kiemtra)

    }
}