from rest_framework import serializers

class dischargeSerializer(serializers.Serializer):
    recruite = serializers.DateField()
    def create(self, validated_data):
        # 데이터를 저장하지 않으므로, 단순히 validated_data를 반환합니다.
        return validated_data
    
