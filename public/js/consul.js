var app = angular.module('chatApp', []);

app.controller('chatController', function($scope) {
    $scope.messages = [];
    
    $scope.newMessage = "";

    function addAutoMessage() {
        setTimeout(function() {
            $scope.$apply(function() {
                $scope.messages.push({sender: 'doctor', text: "Terima kasih telah menghubungi. Ada yang bisa saya bantu?"});
            });
        }, 2000); 
    }

    addAutoMessage();

    $scope.sendMessage = function() {
        if ($scope.newMessage.trim() !== "") {
            $scope.messages.push({sender: 'user', text: $scope.newMessage});
            $scope.newMessage = "";

            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.messages.push({sender: 'doctor', text: "Terima kasih telah menghubungi. Apa yang bisa saya bantu?"});
                });
            }, 1000);
        }
    };

    $scope.onKeyPress = function(event) {
        if (event.key === 'Enter') {
            $scope.sendMessage();
        }
    };

    $scope.clearMessages = function() {
        $scope.messages = []; 

        addAutoMessage();
    };
});
